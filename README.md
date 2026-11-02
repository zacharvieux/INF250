# INF 250 — Web Development Projects

This is a **standalone** GitHub Pages site for the Fall 2026 INF 250 Introduction to Web Development course. It is maintained separately from `fang-and-forge-site` and `veyra-world`; neither of those repositories needs to change.

## Pages

| Page | Folder or file |
| --- | --- |
| Course project directory | `/index.html` |
| Project 4 — How to Play Scythe | `/project4-technical-docs/index.html` |
| Project 5 — Gilded Fates Cards & Games | `/project5-product-landing/index.html` |
| Project 5 — About | `/project5-product-landing/about.html` |
| Project 5 — Visit | `/project5-product-landing/visit.html` |

## Publish this site on GitHub Pages

1. In this repository, open **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then click **Save**.
4. Once Pages is active, the project URLs should be:
   - https://zacharvieux.github.io/INF250/
   - https://zacharvieux.github.io/INF250/project4-technical-docs/
   - https://zacharvieux.github.io/INF250/project5-product-landing/
   - https://zacharvieux.github.io/INF250/project5-product-landing/about.html
   - https://zacharvieux.github.io/INF250/project5-product-landing/visit.html

The site is static HTML/CSS/JavaScript and does not require a build step or hosting payment.

**Important:** The INF 250 syllabus requires W3Spaces and does not automatically accept links hosted elsewhere. Obtain the instructor's written permission before relying on a GitHub Pages submission for your grade.

## What to upload later

### Project 4 — Scythe photographs

See [Project 4 image instructions](project4-technical-docs/images/README.md). Upload these files to `project4-technical-docs/images/`:

- `3d-scythe-combo-768x398.png`
- `Scythe-Box-open.jpg`
- `ScytheRules.jpg`

### Project 5 — Gilded Fates photographs

See [Project 5 image instructions](project5-product-landing/images/README.md). Upload these files to `project5-product-landing/images/`:

- `gilded-fates-logo.png`
- `gilded-fates-storefront.jpg`
- `trading-cards.jpg`
- `board-games.jpg`
- `miniatures.jpg`
- `game-night.jpg`
- `inside-the-shop.jpg`
- `find-the-store.jpg`

The CSS and JavaScript show styled placeholders until the actual images load. Preserve **exact spelling and capitalization** in the filenames.

### Project 5 — Student promotional video

Upload `gilded-fates-promo.mp4` under `project5-product-landing/videos/`. This video must be recorded by the student for the assignment. See [video instructions](project5-product-landing/videos/README.md).

After uploading images, complete [CREDITS.md](project5-product-landing/CREDITS.md) with sources, ownership, and necessary permissions. Update placeholder photo captions so that they correctly credit the uploaded materials. Do not claim official endorsement by the store.

## Project requirements built into the code

- Project 4 has `#main-doc`, eight sections with matching `#navbar .nav-link` links, code samples, lists, and responsive layout.
- Project 5 has the freeCodeCamp-required `#header`, `#header-img`, fixed `#nav-bar`, three `.nav-link` anchors, `#video`, `#form`, `#email`, and `#submit`. Its three pages use a common CSS file and consistent navigation.
- The email form is a **freeCodeCamp demonstration only**, not a real newsletter signup.

Run the actual freeCodeCamp test suites and verify the images and video on mobile and desktop before submitting.

## Taking it down

This entire course site lives in the separate `zacharvieux/INF250` repository. It can be archived, made private (depending on Pages plan), or deleted after the class without changing the Fang & Forge website. If you later configure a custom subdomain, remove its DNS record when retiring the site.
