async function loadDetail() {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id')) || 2;

  const res = await fetch('data/destinations.json');
  const destinations = await res.json();
  const dest = destinations.find(d => d.id === id) || destinations[1];

  document.title = 'Wanderlust | ' + dest.name;
  document.getElementById('bannerImg').src = dest.image;
  document.getElementById('bannerTitle').textContent = dest.name + ', ' + dest.country;
  document.getElementById('bannerSubtitle').textContent = dest.description;

  document.getElementById('aboutText').textContent = dest.description;

  document.getElementById('infoCountry').textContent = dest.country;
  document.getElementById('infoCurrency').textContent = dest.currency;
  document.getElementById('infoLanguage').textContent = dest.language;
  document.getElementById('infoStay').textContent = dest.stay;
  document.getElementById('infoBestTime').textContent = dest.bestTime;
  document.getElementById('infoPrice').textContent = dest.price;

  document.getElementById('attractionsList').innerHTML =
    dest.attractions.map(a => '<li>' + a + '</li>').join('');

  document.getElementById('itineraryList').innerHTML =
    dest.itinerary.map(day => '<li class="day-card"><p>' + day + '</p></li>').join('');

  const gallery = document.getElementById('gallery');
  gallery.innerHTML = dest.attractions.slice(0, 4).map((_, i) => `
    <img src="${dest.image}" alt="${dest.name} photo ${i + 1}"
         class="gallery-thumb" loading="lazy">
  `).join('');
  gallery.querySelectorAll('.gallery-thumb').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  document.getElementById('planLink').href = 'planner.html?dest=' + encodeURIComponent(dest.name);

  loadDetailWeather(dest);
}

async function loadDetailWeather(dest) {
  try {
    const w = await fetchWeather(dest.lat, dest.lon);
    document.getElementById('weatherTemp').textContent = w.temp + ' \u00b0C';
    document.getElementById('weatherCondition').textContent = w.condition;
    document.getElementById('weatherWind').textContent = w.wind + ' km/h';
  } catch {
    document.getElementById('weatherCondition').textContent = 'Unavailable';
  }
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  lb.classList.add('active');
}

document.getElementById('lightboxClose')?.addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('active');
});

document.getElementById('lightbox')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
});

loadDetail();
