// ===== EVENTS =====
function loadEvents() {
  let events = ["Club Meeting", "Career Fair", "Music Night"];
  let output = events.map(e => "<li>" + e + "</li>").join("");
  document.getElementById("eventList").innerHTML = output;
}

// ===== MENU =====
function loadMenu() {
  let menu = ["Pizza", "Burger", "Salad"];
  let output = menu.map(m => "<li>" + m + "</li>").join("");
  document.getElementById("menuList").innerHTML = output;
}

// ===== LOCATION =====
function showLocation() {
  document.getElementById("locationText").textContent =
    "Your location: Campus Center (placeholder)";
}

// ===== WEATHER (OPEN-METEO - NO API KEY) =====
function loadWeather() {
  const lat = 41.8781;
  const lon = -87.6298;

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    .then(res => res.json())
    .then(data => {
      const temp = data.current_weather.temperature;
      const wind = data.current_weather.windspeed;

      document.getElementById("weather").textContent =
        `Temperature: ${temp}°C | Wind: ${wind} km/h`;
    })
    .catch(() => {
      document.getElementById("weather").textContent =
        "Weather unavailable (sample: 18°C)";
    });
}


window.onload = function () {
  loadWeather();
};