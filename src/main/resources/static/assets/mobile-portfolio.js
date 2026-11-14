const filters = document.querySelector('.filters');
const projects = Array.from(document.querySelectorAll('[data-platform]'));
const results = document.querySelector('[data-results]');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  const platform = selected.dataset.filter;
  filters.querySelectorAll('button').forEach((button) => {
    button.setAttribute('aria-pressed', String(button === selected));
  });
  projects.forEach((project) => {
    project.hidden = platform !== 'all' && project.dataset.platform !== platform;
  });
  const visibleCount = projects.filter((project) => !project.hidden).length;
  results.textContent = `${visibleCount} projects shown`;
});
