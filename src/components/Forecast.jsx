function Day(props) {
  return (
    <>
      <div className="day" id="day">
        <p className="day-header">{props.day}</p>
        <p className="forecast-temp">Temperature: </p>
        <div id="day1-high-low" className="high-low"></div>
        <p>Description: </p>
        <p id="day1-description" className="description"></p>
        <p>Rain Chance: </p>
        <p id="day1-rain-chance" className="rain-chance"></p>
      </div>
    </>
  );
}

export default function Forecast(props) {
  return (
    <>
      <Day day="Today" />
      <Day day="Tommorow" />
      <Day />
    </>
  );
}
