# Sizwe Financial Solutions — website

Static site built as seven self-contained pages. Each `.dc.html` file opens directly in a browser; no build step.

## Pages

| File | Page |
|---|---|
| `Sizwe-Home.dc.html` | Home |
| `Sizwe-Group.dc.html` | The group |
| `Sizwe-Products.dc.html` | Products & services |
| `Sizwe-Resources.dc.html` | Resources |
| `Sizwe-Careers.dc.html` | Careers |
| `Sizwe-Contact.dc.html` | Contact |
| `Sizwe-Book.dc.html` | Book a session |

## Structure

- `support.js` — runtime shared by every page (must sit next to the HTML files).
- `assets/` — logos and photography: Sizwe Financial Solutions wordmark (`logo-sizwe-fs.svg`, `logo-sizwe-fs-white.svg`), Kapital Bluestar (`logo-kapital.svg`), Sanlam (`logo-full-*.svg`), partner marks (`ptr-old-mutual.svg`, `ptr-capital-legacy.svg`, `ptr-king-price.svg`).
- `_ds/sanlam-design-system-.../` — Sanlam design system: colour, type, spacing and effect tokens plus the component bundle (`_ds_bundle.js`).
- `Sizwe Wealth website/` — earlier standalone bundled export of the site.

## Running locally

Serve the folder over HTTP (relative asset paths need it):

```bash
python3 -m http.server 8000
# then open http://localhost:8000/Sizwe-Home.dc.html
```

## Known gaps

- Contact, booking and career application forms are UI only — no submit destination is wired.
- Adviser names and profile photography are placeholders.
- Design-system fonts substitute Mulish for Sanlam Sans.
