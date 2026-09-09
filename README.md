# Prashant Chavan — Portfolio

A responsive portfolio inspired by the supplied UI reference: cool gray canvas, large condensed typography, orange and purple accents, and original project artwork. Built with HTML, CSS, and JavaScript; no framework, install step, or runtime dependency is needed.

## Run locally

Requires Node.js 18 or newer.

```sh
npm run dev
```

Open http://localhost:5173. To use another port: `npm run dev -- --port 3000`.

## Build

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to any static host. Assets and links use relative paths, so subdirectory hosting is supported. The local development server binds to localhost only.

## Content and editing

- `index.html`: page sections, project cards, contact information, and metadata.
- `styles.css`: responsive layout and visual design.
- `app.js`: case study content, project filters, modal details, mobile menu, active section navigation, and copyright year.
- `#growth-case-studies`: a dedicated social media and growth section with six expandable campaign stories (Sattva Skin, Ayugenix Lab, The Rare Blends, Xclusive Vision, Krishna Travels, and Drive U), plus original PDF page previews in `assets/case-studies/`. Strategy, execution, and outcomes come from the supplied portfolio; the campaign spotlight metrics belong to Drive U only.
- `assets/`: locally hosted fonts, original artwork, resume, and portfolio PDF.

Contact actions go directly to the supplied LinkedIn profile, WhatsApp, or phone number. There is no contact form backend or simulated submission.

The resume is the primary source for current title, location, roles, dates, and AI project results. The supplied portfolio provides design case studies, freelance history, and Drive U campaign results. The source documents contain inconsistent descriptions around Krishna Travels and Drive U; the site uses the clearly labeled Drive U results on page 11 and avoids ambiguous budget claims. AI and website cards are graphic interpretations, identified as such in their project details. They are not product screenshots. Label and Ayurveda images are original assets downloaded from the user's shared Drive folder.

The hero uses a typography layout with a brief introduction, work and resume links, focus-area shortcuts, and a location/availability line. No testimonials, awards, adoption figures, email address, or client quotations have been invented. LinkedIn could not be read automatically; the user's exact provided URL is used for contact. The page includes full PDF downloads, project source links, and a link to the complete work archive.

Fonts: Barlow Condensed, DM Sans, and Caveat, downloaded from Google Fonts. Font license texts are included in `assets/fonts/`.

The case study section also contains all four mini case studies from PDF page 12: Hilarius Ayurveda, Bosom Buddy, IPCS Global, and +Vibes. Eight original creative previews link to their Drive source files; Bosom Buddy previews are actual label files, and +Vibes previews show branded products. A keyboard-accessible evidence viewer supports grouped previous/next navigation, Escape to close, focus return, and source links. Campaign screenshots and portfolio summaries are labeled separately. Qualitative mini case outcomes are attributed to the portfolio; artwork is not presented as proof of numerical performance. Source mappings and review notes are in `assets/proof/sources.json`.

Published on Cloudflare Pages: https://prashant-portfolio-9rn.pages.dev


## Interface behavior

The layout uses a light neutral canvas, readable body text, and responsive spacing. The header stays visible while scrolling and switches to a keyboard-accessible menu at 900px. Project filters show category counts and scroll horizontally on narrow screens. Focus-area shortcuts select the relevant project category; the main Selected work link resets the filter.

Project dialogs include a persistent close control and previous/next navigation through the current filtered selection. Escape closes either viewer and returns focus to its trigger. Campaign navigation remains below the header, with anchor spacing for linked stories. All existing campaign source links and downloads remain available.

Validated in local headless Chrome at 320, 375, 390, 600, 768, 900, 1024, and 1440px: page overflow, filters, project navigation, focus return, mobile menu, campaign controls, evidence paging and zoom, accordions, and local asset responses. All project dialogs were additionally checked at 320, 390, 1024, and 1440px.
