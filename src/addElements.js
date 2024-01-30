const currentConditionsBox = `<h2>Current Conditions</h2>
<p id="conditions"> </p>
<p id="current-temperature">Temperature: </p>
<p id="feels-like">Feels Like: </p>
<p id="humidity">Humidity: </p>
<p id="wind">Wind: </p>
<p id="uv-index">UV Index: </p>
<p id="air-quality">Air quality: </p>
<p id=""> </p>`;

const forecastBox = `<h2>Three-Day Forecast</h2>
<div class="day" id="day1">
  <p>Day 1</p>
  <p id="day1-temperature">Temperature: <div id="day1-high-low" class="high-low"></div></p>
  <p id="day1-description">Description: </p>
</div>
<div class="day" id="day2">
  <p>Day 2</p>
  <p id="day2-temperature">Temperature: </p>
  <p id="day2-description">Description: </p>
</div>
<div class="day" id="day3">
  <p>Day 3</p>
  <p id="day3-temperature">Temperature: </p>
  <p id="day3-description">Description: </p>
</div>`;

const otherInfo = `<h2>Other Information</h2>
<p id="moon-phase">Moon Phase:</p>
<p id="surise">Sunrise: </p>
<p id="sunset">Sunset: </p>`;

function createBox(html) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = html;
  return box;
}

export function generateHomepage() {
  const content = document.createElement("div");
  content.id = "content";
  content.classList.add("content");

  document.body.appendChild(content);
  content.appendChild(createBox(currentConditionsBox));
  content.appendChild(createBox(forecastBox));
  content.appendChild(createBox(otherInfo));
}

export function elementsObject() {
  const elements = {
    conditions: document.getElementById("conditions"),
    temp: document.getElementById("current-temperature"),
    feelsLike: document.getElementById("feels-like"),
    humdity: document.getElementById("humidity"),
    wind: document.getElementById("wind"),
    uv: document.getElementById("uv-index"),
    air: document.getElementById("air-quality"),
    moonPhase: document.getElementById("moon-phase"),
    sunrise: document.getElementById("sunrise"),
    sunset: document.getElementById("sunset"),
    dayOneTemp: document.getElementById("day1-high-low"),
  };

  return elements;
}
