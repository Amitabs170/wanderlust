const STARS = { 1:'★★★★★',2:'★★★★★',3:'★★★★★',4:'★★★★☆',5:'★★★★★',6:'★★★★☆' };

let allDestinations = [];

async function loadDestinations() {
  const res = await fetch('data/destinations.json');
  allDestinations = await res.json();
  renderCards(allDestinations);
}

function renderCards(list) {
  const grid = document.getElementById('destinationGrid');
  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = '<p class="no-results">No destinations match your filters.</p>';
    return;
  }
  grid.innerHTML = list.map(d => `
    <article class="destination-card" data-budget="${d.budget}" data-type="${d.type}">
      <img src="${d.image}" alt="${d.name}" loading="lazy">
      <div class="destination-content">
        <div class="card-badges">
          <span class="badge badge-type">${d.type}</span>
          <span class="badge badge-budget">${d.budget}</span>
        </div>
        <div class="card-stars">${STARS[d.id] || '★★★★★'}</div>
        <h3>${d.name}</h3>
        <p class="card-country">📍 ${d.country}</p>
        <p>${d.description}</p>
        <div class="card-footer">
          <span class="price">${d.price} / person</span>
          <a href="destinations.html" class="btn">Explore</a>
        </div>
      </div>
    </article>
  `).join('');
}

loadDestinations();
