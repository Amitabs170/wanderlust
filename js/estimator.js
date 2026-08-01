document.getElementById('calculateBtn')?.addEventListener('click', () => {
  const transport = parseFloat(document.getElementById('transportCost').value) || 0;
  const hotel     = parseFloat(document.getElementById('hotelCost').value)     || 0;
  const food      = parseFloat(document.getElementById('foodCost').value)       || 0;
  const activity  = parseFloat(document.getElementById('activityCost').value)  || 0;
  const travellers = parseInt(document.getElementById('travellers').value)      || 1;

  const subtotal = transport + hotel + food + activity;
  const total    = subtotal * travellers;

  document.getElementById('resultTransport').textContent = '\u20b9' + transport.toLocaleString('en-IN');
  document.getElementById('resultHotel').textContent     = '\u20b9' + hotel.toLocaleString('en-IN');
  document.getElementById('resultFood').textContent      = '\u20b9' + food.toLocaleString('en-IN');
  document.getElementById('resultActivity').textContent  = '\u20b9' + activity.toLocaleString('en-IN');
  document.getElementById('resultTotal').textContent     = '\u20b9' + total.toLocaleString('en-IN');

  const result = document.getElementById('budgetResult');
  result.style.display = 'block';
  result.scrollIntoView({ behavior: 'smooth' });
});
