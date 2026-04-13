// BUTTON TEST
document.getElementById("testBtn")?.addEventListener("click", () => {
  alert("App is working!");
});

// EVENTS PAGE
const events = [
  "Career Fair - April 20",
  "Music Night - April 22",
  "Hackathon - April 25"
];

const eventList = document.getElementById("eventList");

if (eventList) {
  events.forEach(event => {
    const li = document.createElement("li");
    li.textContent = event;
    eventList.appendChild(li);
  });
}

// DINING PAGE
const foodBtn = document.getElementById("loadFood");

if (foodBtn) {
  foodBtn.addEventListener("click", () => {
    const foods = ["Pizza", "Burger", "Pho", "Sushi"];
    const list = document.getElementById("foodList");

    list.innerHTML = "";

    foods.forEach(food => {
      const li = document.createElement("li");
      li.textContent = food;
      list.appendChild(li);
    });
  });
}

// WEATHER API
fetch("https://api.open-meteo.com/v1/forecast?latitude=41.9&longitude=-87.6&current_weather=true")
  .then(res => res.json())
  .then(data => {
    const weather = document.getElementById("weather");
    if (weather) {
      weather.textContent = "Current temp: " + data.current_weather.temperature + "°C";
    }
  })
  .catch(err => console.log(err));