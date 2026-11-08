# Symons Family Recipes

A small, static recipe site made with plain HTML, CSS, and JavaScript. There is no build step or package installation: open `index.html` in a browser to preview it.

## Adding a recipe

Open `index.html` in a text editor and copy the existing `<article class="recipe-card">...</article>` inside `.recipe-list` in the category section where the recipe belongs. Each home-page card links to its own detailed recipe page.

- Set `data-tags` on the article to lowercase, space-separated tags. For example: `data-tags="lemon pudding family-favourite"`.
- Add a matching filter button in the Browse section if you want visitors to filter by a new tag.
- Update the card number, title link, short description, and tags.
- Keep each recipe inside its category section (`mains` or `desserts`). Add another section by copying a section and giving it a unique `id`.
- Create the matching full recipe page under `recipes/`, copying `recipes/lemon-cup-pudding.html` and updating the details. Use `../styles.css` for its stylesheet and `../index.html` for links back to the homepage.
- Add original scans to an `images/archive/` folder and index them on `archive.html`.

## Adding an archive scan

Open `archive.html` in a text editor and add an `<article class="archive-entry">` inside `#archive-grid`. The `<template id="archive-entry-template">` near the end of that file shows the structure to copy.

- Put the scan in `images/archive/` and update both the image `src` and link `href` to its filename.
- Give the image a useful `alt` description, then update the document title, note, number, source, and type.
- Set `data-tags` to lowercase, space-separated tags, such as `data-tags="grandmother handwritten"`.
- Add a matching filter button in the archive browse section for any new tag.

No original scans are included yet. If the site is published publicly, anyone with its link may be able to view recipe scans, so only upload documents you are comfortable sharing.

## Files

- `index.html` — recipe content and page structure
- `recipes/` — individual recipe pages
- `archive.html` — searchable archive index and scan-entry template
- `styles.css` — colors, layout, and responsive styling
- `script.js` — recipe search and tag filters
- `archive.js` — archive search and source-tag filters
