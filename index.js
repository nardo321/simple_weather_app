async function fetchData() {
  const ip_response = await fetch('https://api.ipify.org/');
  const ip = await ip_response.text();
  console.log(ip);

  const response = await fetch('http://ip-api.com/json/${ip}?fields=message,lat,lon');
  const data = await response.json();

  async function fetchWeather(lat, lon){
    let response = await fetch('https://api.open-meteo.com/v1/metno?latitude=${lat}&longitude=${lon}&hourly=temperature_2m');
    let data = await response.json();
    console.log(data); 
  }
  await fetchWeather(data['lat'], data['lon'])
}

fetchData();
