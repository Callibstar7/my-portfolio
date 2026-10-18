# Caleb — Portfolio Website

A responsive, single-page portfolio built with plain HTML, CSS, and JavaScript. There is no build step or package installation. Google Fonts loads online; system fonts are used offline.

## Run it

- Open `index.html` in a browser, or
- Run `python -m http.server 8080` in this folder and visit http://localhost:8080.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Content for the hero, about, skills, projects, contact, and footer |
| `styles.css` | Theme tokens, layout, responsive breakpoints, and motion styles |
| `script.js` | Mobile navigation, scroll reveal, active navigation, and footer year |

## Before publishing

- Add your availability, biography, and accurate `X+` figures in `index.html` before publishing. Your name, Lagos location, and email are already filled in.
- The first three cards document 4EVA-KLASY, Juniper & Stone, and Nigeria Brief; replace the remaining sample card when you have another project.
- Replace the sample skills with your real tools, then add links to your social profiles in the contact section.
- The CV button downloads the professional CV from `assets/Caleb_Ibezim_CV.docx`.
- Remove any skills, claims, or contact response-time statements that do not apply to you.

## Responsive behavior

- Above 960px: two-column hero and about sections.
- 881–960px: compact two-column layouts.
- 701–880px: stacked hero and about sections, with the mobile navigation menu.
- 700px and below: single-column project cards.
- 560px and below: compact spacing and controls.

The navigation and scroll effects respect reduced-motion preferences.

