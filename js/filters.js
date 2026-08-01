let activeBudget = 'All';
let activeType = 'All';

function applyFilters() {
  const query = (document.getElementById('search')?.value || '').toLowerCase().trim();
  const filtered = allDestinations.filter(d => {
    const matchBudget = activeBudget === 'All' || d.budget === activeBudget;
    const matchType   = activeType === 'All'   || d.type === activeType;
    const matchSearch = !query ||
      d.name.toLowerCase().includes(query) ||
      d.country.toLowerCase().includes(query) ||
      d.type.toLowerCase().includes(query);
    return matchBudget && matchType && matchSearch;
  });
  renderCards(filtered);
}

document.querySelectorAll('.budget-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.budget-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeBudget = btn.dataset.budget;
    applyFilters();
  });
});

document.querySelectorAll('.type-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.type-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeType = btn.dataset.type;
    applyFilters();
  });
});

document.getElementById('searchForm')?.addEventListener('submit', e => {
  e.preventDefault();
  applyFilters();
});

document.getElementById('search')?.addEventListener('input', applyFilters);
