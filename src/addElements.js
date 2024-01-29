const currentConditionsBox = `<h2>Current Conditions</h2>
<p id="current-temperature">Temperature:</p>
<p id="current-description">Description:</p>`;

const forecastBox = `<h2>Three-Day Forecast</h2>
<div class="day" id="day1">
  <p>Day 1</p>
  <p id="day1-temperature">Temperature:</p>
  <p id="day1-description">Description:</p>
</div>
<div class="day" id="day2">
  <p>Day 2</p>
  <p id="day2-temperature">Temperature:</p>
  <p id="day2-description">Description:</p>
</div>
<div class="day" id="day3">
  <p>Day 3</p>
  <p id="day3-temperature">Temperature:</p>
  <p id="day3-description">Description:</p>
</div>`;

const otherInfo = `<h2>Other Information</h2>
<p id="moon-phase">Moon Phase:</p>
<p id="tide-info">Tide:</p>`;

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
    temp: document.getElementById("current-temperature"),
  };

  return elements;
}
