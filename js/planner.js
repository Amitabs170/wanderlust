const params = new URLSearchParams(location.search);
const destParam = params.get('dest');
if (destParam) {
  const sel = document.getElementById('destination');
  const opt = sel && [...sel.options].find(o => o.value === destParam);
  if (opt) sel.value = destParam;
}

document.getElementById('tripForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const name        = document.getElementById('name').value.trim();
  const destination = document.getElementById('destination').value;
  const startVal    = document.getElementById('startDate').value;
  const endVal      = document.getElementById('endDate').value;
  const travellers  = parseInt(document.getElementById('travellers').value) || 1;
  const transport   = document.getElementById('transport').value;
  const hotel       = document.getElementById('hotel').value;

  const start = new Date(startVal);
  const end   = new Date(endVal);
  const days  = endVal && startVal ? Math.max(1, Math.ceil((end - start) / 86400000)) : '—';

  document.getElementById('summaryName').textContent        = name || '—';
  document.getElementById('summaryDest').textContent        = destination;
  document.getElementById('summaryDates').textContent       = startVal && endVal ? startVal + ' → ' + endVal : '—';
  document.getElementById('summaryDays').textContent        = days + (days !== '—' ? ' day(s)' : '');
  document.getElementById('summaryTravellers').textContent  = travellers;
  document.getElementById('summaryTransport').textContent   = transport;
  document.getElementById('summaryHotel').textContent       = hotel;

  const summary = document.getElementById('tripSummary');
  summary.style.display = 'block';
  summary.scrollIntoView({ behavior: 'smooth' });
});
