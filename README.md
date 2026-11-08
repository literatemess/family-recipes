# The Family Recipe Box

A small, static recipe site made with plain HTML, CSS, and JavaScript. There is no build step or package installation: open `index.html` in a browser to preview it.

## Adding a recipe

Open `index.html` in a text editor and copy the existing `<article class="recipe-card">...</article>` inside the category section where the recipe belongs.

- Set `data-tags` on the article to lowercase, space-separated tags. For example: `data-tags="lemon pudding family-favourite"`.
- Add a matching filter button in the Browse section if you want visitors to filter by a new tag.
- Replace the recipe number, title, description, ingredients, and method.
- Keep each recipe inside its category section (`mains` or `desserts`). Add another section by copying a section and giving it a unique `id`.
- Add original scans to an `images/archive/` folder and link to them from The Paper Trail section when ready.

The archive is currently a placeholder; no original scans are included. If the site is published publicly, anyone with its link may be able to view recipe scans, so only upload documents you are comfortable sharing.

## Files

- `index.html` — recipe content and page structure
- `styles.css` — colors, layout, and responsive styling
- `script.js` — recipe search and tag filters
