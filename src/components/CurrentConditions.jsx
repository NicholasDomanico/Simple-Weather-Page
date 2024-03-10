export default function CurrentConditions({ weather }) {
  return (
    <>
      <h2>Current Conditions</h2>
      <p>Description: </p>
      <p id="conditions">{weather.conditions}</p>
      <p>Temperature: </p>
      <p id="current-temperature">{weather.currentTemp}</p>
      <p>Feels Like: </p>
      <p id="feels-like"></p>
      <p>Humidity: </p>
      <p id="humidity"></p>
      <p>Wind: </p>
      <p id="wind"></p>
      <p>UV Index: </p>
      <p id="uv-index"></p>
      <p>Air Quality: </p>
      <p id="air-quality"></p>
    </>
  );
}
