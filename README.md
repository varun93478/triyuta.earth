# TRIYUTA — Plants & Gifts

A responsive informational website with a botanical visual world and native browser animation. No framework, build step, package installation, or external font service is required.

## Preview
Open `index.html` directly, or run `python -m http.server 8000` and visit http://localhost:8000.

## Page and motion
- `index.html`: original branding, introduction, occasion-specific WhatsApp links, Instagram, and contact information.
- `styles.css`: responsive layout, design tokens, hover states, scene animation, and reduced-motion styles.
- `motion.js`: staged headline entrance, pointer perspective, scroll depth, section reveals, and the motion pause control. Animation stops when the tab is hidden or the scene is offscreen. The full content and enquiry links work without JavaScript.
- `assets/triyuta-primary.png`: original primary logo, preserved intact in the header.
- `assets/triyuta-seal.png`: original seal, used as favicon.
- `assets/triyuta-monogram.png`: retained original monogram.
- `assets/living-world.webp`: AI-generated artistic botanical scene, not a product photograph or representation of confirmed inventory. Optimized WebP, approximately 237 KB. Generated with the built-in Image Gen tool from a brief for a cream, forest-green and lavender miniature jade garden on floating limestone islands, without text or branding.

The motion control pauses ambient animation and pointer/scroll movement. System reduced-motion preferences disable animations automatically. Keyboard focus, semantic links, and mobile touch targets are preserved.

## Real product photography
The three `assets/plant-gift-*.webp` images are optimized copies of the owner’s supplied photos. They show three views of one completed plant return gift for a first birthday and naming ceremony, not three different products. The originals remain unchanged. The gallery enquiry link refers to that actual paper carrier and thank-you card example; pricing and future customisation are discussed on WhatsApp.

## Deployment
The existing repository is connected to the existing Vercel project. Production deploys from `main` to https://www.triyutaearth.com/. Review locally and commit or push through GitHub Desktop when ready. Pushing to `main` can update the live website. Preserve the current Vercel and DNS setup.

WhatsApp: https://wa.me/917760560455
Instagram: https://www.instagram.com/triyuta.earth/

No store, payment integration, accounts, analytics, or enquiry form is included. Occasion links prefill a message in WhatsApp; they do not send messages automatically.

Additional gifting options include wrapped plant gifts, terracotta plant gifts, and gift hampers, following the owner’s stated direction. These are enquiry options, not completed examples. Third-party reference screenshots and their prices are not published. Plants, packaging, hamper contents and pricing are confirmed during the enquiry.

The three `assets/*-concept.webp` images were generated using the built-in Image Gen tool and are labelled illustrative concepts on the page. Prompts: an ivory paper-wrapped jade gift with twine and a blank tag; a rosette succulent in terracotta with pebbles and a blank tag; and a kraft plant hamper with an ivory potted jade, wrapped parcel, lavender ribbon and blank card. All use warm cream studio styling, without prices, text or branding. These are styling ideas, not completed products or confirmed hamper contents.

Corporate gifting and more plant choices have dedicated visual enquiry options. `assets/corporate-gifting-concept.webp` and `assets/plant-variety-concept.webp` were generated with the built-in Image Gen tool. Prompts: coordinated jade gifts in ivory pots and kraft carriers for a team; and a group of jade, rosette succulent, snake plant and peace lily in neutral pots. Warm cream editorial photography, no logos or text. Images are illustrative concepts; plant choices and availability are confirmed on enquiry.

The owner selected the plant-and-desk corporate concept: `assets/corporate-desk-gift-concept.webp` now shows an upright plant in an open carrier, notebook, pen and mug, with Your logo here placeholders. It replaces the earlier repeated-plant corporate image on the page. The previous asset is retained. This remains an illustrative enquiry option, with contents and branding confirmed during planning.

The real-work gallery now uses two distinct original photographs: the finished gift and side/plant view. The similar second front view is retained as an asset but not displayed. Only browser framing and layout are adjusted; generated retouches were rejected because they changed printed card details.

Real product photographs use a subtle reversible CSS colour grade: modest exposure lift, natural saturation and a slight warm-neutral treatment. The darker side view has a slightly larger exposure lift. Source photo files, product details, printed text and production backgrounds remain unchanged.

An optional branded fragrance card is included in the corporate desk-set concept and enquiry copy. `assets/corporate-desk-fragrance-concept.webp` is an Image Gen edit of the selected set, adding an ivory hanging fragrance card with Your logo here branding beside the existing plant, notebook, pen and mug. Scent, availability and final contents are discussed during enquiry. The earlier image is retained.

Fragrance cards are a standalone gifting and return-gift category, also available to discuss as a hamper addition. `assets/fragrance-cards-concept.webp` was generated with Image Gen from a brief for botanical ivory hanging fragrance cards with a paper sleeve and natural cords on a cream tabletop. The image is illustrative; final designs, scents and pricing are confirmed on enquiry.

The central hero pot carries the original `triyuta-primary.png` artwork as a responsive overlay within the same animated scene frame. This preserves the exact logo and original scene instead of using a regenerated logo. The original decorative scene remains unchanged.

## Gift in Bloom introduction
On the first entry per browser tab session, an upright plant in an open gift box appears with the original logo. Lavender petals move outward to reveal the website in about three seconds. `splash.js` handles the sequence and the Skip introduction button. Escape also skips. The splash reveals the already-rendered hero without replaying its entrance, preventing a second reveal that resembles a reload. A stable scrollbar gutter keeps the layout from shifting when scrolling unlocks. Reduced-motion visitors, direct section links and repeat visits bypass it. JavaScript-disabled visitors see the complete website immediately; a five-second fallback releases the page if the animation script fails. `assets/splash-plant-gift.webp` is the optimized Image Gen artwork from the approved concept. No deployment changes are needed.
