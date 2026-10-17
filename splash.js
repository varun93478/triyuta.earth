/* Optional first-visit introduction. The page is usable if this script never loads. */
(() => {
  const root = document.documentElement;
  const splash = document.getElementById('brand-splash');
  if (root.dataset.splash !== 'pending') { splash.remove(); return; }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const skip = splash.querySelector('button');
  const regions = [...document.querySelectorAll('.site-header, main, footer, .skip-link')];
  let finished = false;
  let timeout;
  const animations = [];

  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);
    animations.forEach(animation => animation.cancel());
    regions.forEach(element => { element.inert = false; });
    delete root.dataset.splash;
    splash.remove();
    document.removeEventListener('keydown', keyboard);
    reduced.removeEventListener('change', preferenceChanged);
    try { sessionStorage.setItem('triyuta-splash-seen', '1'); } catch (_) {}
    document.dispatchEvent(new Event('triyuta:splash-end'));
  }
  function keyboard(event) {
    if (event.key === 'Escape') finish();
    if (event.key === 'Tab' && !finished) { event.preventDefault(); skip.focus(); }
  }
  function preferenceChanged(event) { if (event.matches) finish(); }

  skip.addEventListener('click', finish);
  document.addEventListener('triyuta:splash-timeout', finish, { once: true });
  document.addEventListener('keydown', keyboard);
  reduced.addEventListener('change', preferenceChanged);
  regions.forEach(element => { element.inert = true; });
  splash.hidden = false;
  skip.focus({ preventScroll: true });
  timeout = setTimeout(finish, 3300);

  if (reduced.matches || typeof splash.animate !== 'function') { finish(); return; }
  const animate = (element, frames, delay, duration) => {
    animations.push(element.animate(frames, {
      delay, duration, easing: 'cubic-bezier(.65,0,.2,1)', fill: 'both'
    }));
  };
  animate(splash.querySelector('.splash-track span'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 0, 1650);
  animate(splash.querySelector('.splash-gift'), [
    { opacity: 1, transform: 'translateY(0) scale(1)' },
    { opacity: 1, transform: 'translateY(-10px) scale(1.015)', offset: .5 },
    { opacity: 0, transform: 'translateY(-20px) scale(.96)' }
  ], 0, 1950);
  const travel = Math.max(innerWidth, innerHeight) * 1.3;
  splash.querySelectorAll('.splash-petals i').forEach((petal, i) => {
    animate(petal, [
      { transform: `rotate(${i * 60}deg) translateY(-32px)`, opacity: .85 },
      { transform: `rotate(${i * 60 + 10}deg) translateY(-65px)`, opacity: .95, offset: .25 },
      { transform: `rotate(${i * 60 + 18}deg) translateY(-${travel}px) scale(1.15)`, opacity: .3 }
    ], 660 + i * 75, 1950);
  });
  animate(splash.querySelector('.splash-veil'), [{ opacity: 1 }, { opacity: 0 }], 1200, 900);
  animate(skip, [{ opacity: 1 }, { opacity: 0 }], 2700, 300);
  clearTimeout(timeout);
  timeout = setTimeout(finish, 3050);
})();
