// ===== EVENTS =====
function loadEvents() {
  let events = ["Club Meeting", "Career Fair", "Music Night"];
  let output = events.map(e => "<li>" + e + "</li>").join("");
  document.getElementById("eventList").innerHTML = output;
}

// ==== LOAD MENU ====
function loadMenu() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    .then(res => res.json())
    .then(data => {
      let output = data.meals.slice(0, 5).map(meal => {
        return `<li>${meal.strMeal}</li>`;
      }).join("");

      document.getElementById("menuList").innerHTML = output;
    })
    .catch(() => {
      document.getElementById("menuList").innerHTML =
        "<li>Failed to load menu</li>";
    });
}

// ===== LOCATION =====
function showLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      document.getElementById("locationText").textContent =
        `Latitude: ${lat}, Longitude: ${lon}`;
    });
  }
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