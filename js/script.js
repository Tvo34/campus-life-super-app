// Load Events from API
function loadEvents() {
  let events = ["Club Meeting", "Career Fair", "Music Night"];

  let output = events.map(e => "<li>" + e + "</li>").join("");

  document.getElementById("eventList").innerHTML = output;
}

function loadMenu() {
  let menu = ["Pizza", "Burger", "Salad"];

  let output = menu.map(m => "<li>" + m + "</li>").join("");

  document.getElementById("menuList").innerHTML = output;
}

function showLocation() {
  document.getElementById("locationText").textContent =
    "Your location: Campus Center (placeholder)";
}