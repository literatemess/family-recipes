const searchInput = document.querySelector('#recipe-search');
const tagButtons = document.querySelectorAll('.tag-button');
const recipeCards = document.querySelectorAll('.recipe-card');
const recipeSections = document.querySelectorAll('[data-recipe-section]');
const resultCount = document.querySelector('#result-count');
const noResults = document.querySelector('#no-results');

let activeTag = 'all';

function filterRecipes() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  let visibleRecipes = 0;

  recipeCards.forEach((card) => {
    const tags = card.dataset.tags.split(' ');
    const matchesTag = activeTag === 'all' || tags.includes(activeTag);
    const matchesSearch = card.textContent.toLocaleLowerCase().includes(searchTerm);
    const isVisible = matchesTag && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleRecipes += 1;
  });

  recipeSections.forEach((section) => {
    const hasVisibleRecipe = [...section.querySelectorAll('.recipe-card')]
      .some((card) => !card.hidden);
    const hasFilters = activeTag !== 'all' || searchTerm !== '';
    section.hidden = hasFilters && !hasVisibleRecipe;
  });

  noResults.hidden = visibleRecipes > 0;
  resultCount.textContent = `${visibleRecipes} ${visibleRecipes === 1 ? 'recipe' : 'recipes'} in the box`;
}

tagButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeTag = button.dataset.tag;
    tagButtons.forEach((tagButton) => {
      const isActive = tagButton === button;
      tagButton.classList.toggle('is-active', isActive);
      tagButton.setAttribute('aria-pressed', String(isActive));
    });
    filterRecipes();
  });
});

searchInput.addEventListener('input', filterRecipes);
filterRecipes();
