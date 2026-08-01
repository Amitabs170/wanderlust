async function loadFeaturedDestinations() {
  try {
    const res = await fetch('data/destinations.json');
    const destinations = await res.json();
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    grid.innerHTML = destinations.slice(0, 3).map(d => `
      <article class="destination-card">
        <img src="${d.image}" alt="${d.name}" loading="lazy">
        <div class="destination-content">
          <div class="card-badges">
            <span class="badge badge-type">${d.type}</span>
          </div>
          <h3>${d.name}</h3>
          <p class="card-country">${d.country}</p>
          <p>${d.description}</p>
          <div class="card-footer">
            <span class="price">${d.price} / person</span>
            <a href="destination.html?id=${d.id}" class="btn">View Details</a>
          </div>
        </div>
      </article>
    `).join('');
  } catch (err) {
    console.error('Could not load featured destinations', err);
  }
}

document.getElementById('newsletterForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.querySelector('[type="email"]').value;
  alert('Thank you for subscribing with ' + email + '!');
  e.target.reset();
});

loadFeaturedDestinations();
