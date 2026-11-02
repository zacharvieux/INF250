# INF 250 — Standalone class website

This is an **independent** GitHub Pages website for two Fall 2026 projects. Nothing in this package needs to be added to, linked from, or changed in the `fang-and-forge-site` or `veyra-world` repositories.

## Website structure

```
inf250-projects/
  index.html                     Course directory
  styles.css
  .nojekyll
  project4-technical-docs/
    index.html                   Scythe rulebook-style documentation
    styles.css
    media.js
    images/
      README.md                  Image upload names
  project5-product-landing/
    index.html                   Gilded Fates landing page
    about.html                   About the business / student reflection
    visit.html                   Location, phone, hours
    styles.css
    media.js
    CREDITS.md                   Image permission / attribution worksheet
    images/
      README.md                  Image upload names
    videos/
      README.md                  Student promo video upload name
```

## What you need to do

1. **Check with Professor Walters before submitting a GitHub URL.** The written INF 250 syllabus requires live sites to be hosted on W3Spaces and says other hosting providers will not be graded. Get explicit permission for a GitHub Pages substitute before relying on it for credit.
2. On GitHub, create a **new public repository** named `INF250` under `zacharvieux`. Do not choose the Fang & Forge repository. If ChatGPT is helping push via the GitHub connector, create the empty repository and ask ChatGPT to upload the files. Otherwise, upload the *contents* of this package to the new repository, not the ZIP file itself.
3. After pushing the files, select **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
4. Your expected site URL, once GitHub Pages deploys, is `https://zacharvieux.github.io/INF250/` (if a different custom domain is inherited from your GitHub account's user site, confirm the actual published URL in Pages settings).
5. Upload the photos and logo using the exact filenames listed in each `images/README.md`. The pages automatically switch from placeholder panels to the real images when their files are present.
6. Record and upload your required student-on-camera video to `project5-product-landing/videos/gilded-fates-promo.mp4`. The video player will replace its placeholder when the video loads. If video size causes problems, compress your MP4 before uploading.
7. Complete `project5-product-landing/CREDITS.md` with the photographer, source, and permission for each image. Update generic HTML `figcaption` text to credit the actual source as needed.
8. Verify every link and image/video on a phone and desktop. Run the freeCodeCamp Project 4 and Project 5 test suites separately against the corresponding project HTML and CSS, and fix any failing tests before submitting.

## Links after publication

- Course index: `https://zacharvieux.github.io/INF250/`
- Project 4: `https://zacharvieux.github.io/INF250/project4-technical-docs/`
- Project 5: `https://zacharvieux.github.io/INF250/project5-product-landing/`
- Project 5 about: `https://zacharvieux.github.io/INF250/project5-product-landing/about.html`
- Project 5 visit: `https://zacharvieux.github.io/INF250/project5-product-landing/visit.html`

## Optional: a Fang & Forge domain without touching the existing site

To use something like `class.fang-and-forge.com`, you can point a **new subdomain** at GitHub Pages. Under the *new* `INF250` repository's **Settings → Pages**, configure `class.fang-and-forge.com` as the custom domain. At your domain DNS provider, create a `CNAME` for `class` targeting `zacharvieux.github.io`. Verify HTTPS after DNS propagation. **Do not modify the DNS records for the apex `fang-and-forge.com` or `www`**, and do not add any files to the business website. Removing this custom domain later only requires removing the Pages domain configuration and the `class` DNS record.

You cannot make an unrelated GitHub repository appear at `fang-and-forge.com/inf250-projects/` through DNS alone: that particular path is controlled by the site currently serving the main domain. The independent GitHub Pages URL or its own subdomain avoids modifying that existing site.

## Required assignment checks

### Project 4 — Technical Documentation
- `#main-doc`, eight `.main-section` sections, matching heading/section IDs, and `#navbar` with `.nav-link` section links.
- Eight sections: Why This Game; Overview; What You Need; Setup; How to Play; Scoring and Winning; Common Mistakes and Tips; FAQ and Edge Cases.
- Responsive design, multiple paragraphs, lists and code examples, Scythe guide content, first-person rationale.

### Project 5 — Product Landing Page
- `#header`, nested `#header-img`, fixed `#nav-bar` and three `.nav-link` section anchors on `index.html`.
- `#video` HTML5 player: student must supply the required promo video.
- `#form` GET action to `https://www.freecodecamp.com/email-submit` with `#email` and `#submit`. **This is an educational demonstration and does not subscribe anyone to the business.**
- `index.html`, `about.html`, `visit.html` share navigation and one CSS stylesheet; responsive breakpoints included.
- Do not claim the site is official or submit image credits as complete until you've populated them.

## Removing the projects later

Delete the independent `INF250` GitHub repository, and remove its custom domain/DNS record if you configured one. The Fang & Forge website and `veyra-world` stay unchanged.
