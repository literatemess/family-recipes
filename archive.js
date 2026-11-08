const searchInput = document.querySelector('#archive-search');
const tagButtons = document.querySelectorAll('.tag-button');
const resultCount = document.querySelector('#archive-result-count');
const noResults = document.querySelector('#archive-no-results');
const emptyMessage = document.querySelector('#archive-empty');

let activeTag = 'all';

function filterArchive() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  const archiveEntries = document.querySelectorAll('.archive-entry');
  let visibleEntries = 0;

  archiveEntries.forEach((entry) => {
    const tags = entry.dataset.tags.split(' ');
    const matchesTag = activeTag === 'all' || tags.includes(activeTag);
    const matchesSearch = entry.textContent.toLocaleLowerCase().includes(searchTerm);
    const isVisible = matchesTag && matchesSearch;

    entry.hidden = !isVisible;
    if (isVisible) visibleEntries += 1;
  });

  const hasEntries = archiveEntries.length > 0;
  const hasFilters = activeTag !== 'all' || searchTerm !== '';
  emptyMessage.hidden = hasEntries;
  noResults.hidden = !hasEntries || visibleEntries > 0 || !hasFilters;
  resultCount.textContent = `${visibleEntries} ${visibleEntries === 1 ? 'document' : 'documents'} in the archive`;
}

tagButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeTag = button.dataset.tag;
    tagButtons.forEach((tagButton) => {
      const isActive = tagButton === button;
      tagButton.classList.toggle('is-active', isActive);
      tagButton.setAttribute('aria-pressed', String(isActive));
    });
    filterArchive();
  });
});

searchInput.addEventListener('input', filterArchive);
filterArchive();
