const WMO_CODES = {
  0:'Clear Sky',1:'Mainly Clear',2:'Partly Cloudy',3:'Overcast',
  45:'Foggy',48:'Icy Fog',
  51:'Light Drizzle',53:'Moderate Drizzle',55:'Dense Drizzle',
  61:'Slight Rain',63:'Moderate Rain',65:'Heavy Rain',
  71:'Slight Snow',73:'Moderate Snow',75:'Heavy Snow',
  80:'Slight Showers',81:'Moderate Showers',82:'Violent Showers',
  95:'Thunderstorm',96:'Thunderstorm w/ Hail',99:'Thunderstorm w/ Heavy Hail'
};

async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather fetch failed');
  const data = await res.json();
  const c = data.current;
  return {
    temp: c.temperature_2m,
    condition: WMO_CODES[c.weathercode] ?? 'Unknown',
    wind: c.windspeed_10m
  };
}
