async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  const response = await fetch(`/api/weather?city=${city}`);
  const data = await response.json();

  if (data.error) {
    result.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  result.innerHTML = `
    <h3>Weather</h3>
    <p>Temperature: ${data.weather.temperature}°C</p>
    <p>Feels Like: ${data.weather.feels_like}°C</p>
    <p>Country: ${data.weather.country_code}</p>
    <p>Wind Speed: ${data.weather.wind_speed} m/s</p>
    <p>Rain (3h): ${data.weather.rain_last_3h} mm</p>

    <h3>Related News</h3>
    <ul>
      ${data.news.map(n => `<li><a href="${n.url}" target="_blank">${n.title}</a></li>`).join("")}
    </ul>
  `;
}
