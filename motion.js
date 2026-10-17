/* Progressive enhancement: the complete page works without JavaScript. */
(() => {
  const body = document.body;
  const control = document.querySelector('.motion-control');
  const world = document.querySelector('.world');
  const plane = document.querySelector('.world-parallax');
  const hero = document.querySelector('.hero');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let paused = reduced.matches;
  let frame = 0;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let inView = true;
  let scroll = window.scrollY;
  const active = () => !paused && !reduced.matches && !document.hidden && inView;

  function sync() {
    body.dataset.motion = reduced.matches ? 'reduced' : paused ? 'paused' : 'running';
    control.textContent = paused ? 'Play motion' : 'Pause motion';
    control.setAttribute('aria-pressed', String(paused));
    control.hidden = reduced.matches;
    world.dataset.active = String(active());
    document.getAnimations().forEach(animation => {
      if (paused || reduced.matches) animation.pause();
      else if (animation.playState === 'paused') animation.play();
    });
    if (active() && !frame) frame = requestAnimationFrame(render);
    if (!active()) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  }

  function render() {
    frame = 0;
    if (!active()) return;
    x += (targetX - x) * .045;
    y += (targetY - y) * .045;
    const travel = Math.min(scroll / hero.offsetHeight, 1);
    plane.style.transform = `translate3d(${x * 10}px,${y * 7 + travel * 32}px,0) rotateX(${-y * 1.2}deg) rotateY(${x * 1.8}deg)`;
    frame = requestAnimationFrame(render);
  }

  control.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('scroll', () => { scroll = window.scrollY; }, { passive: true });
  hero.addEventListener('pointermove', event => {
    if (!active() || !finePointer.matches) return;
    const bounds = hero.getBoundingClientRect();
    targetX = (event.clientX - bounds.left) / bounds.width - .5;
    targetY = (event.clientY - bounds.top) / bounds.height - .5;
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { targetX = targetY = 0; });

  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    sync();
  }, { rootMargin: '100px' }).observe(world);

  if (!reduced.matches) {
    const showEntrance = () => {
      if (reduced.matches) return;
    document.querySelectorAll('.title-line > *').forEach((line, i) => {
      line.animate([{ transform: 'translateY(105%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], {
        duration: 1200, delay: 100 + i * 180, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards'
      });
    });
    document.querySelectorAll('.hero-description, .hero-actions').forEach((element, i) => {
      element.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }], {
        duration: 900, delay: 500 + i * 130, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards'
      });
    });
    };
    if (document.documentElement.dataset.splash === 'pending') {
      document.addEventListener('triyuta:splash-end', showEntrance, { once: true });
    } else showEntrance();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (paused || reduced.matches) return;
        entry.target.animate([{ opacity: .15, transform: 'translateY(26px)' }, { opacity: 1, transform: 'translateY(0)' }], {
          duration: 850, easing: 'cubic-bezier(.16,1,.3,1)'
        });
      });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  sync();
})();
