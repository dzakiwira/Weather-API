import "./styles.css";

const cityName = document.querySelector("#cityName");
const currentTemp = document.querySelector("#current-temp");
const feelsLike = document.querySelector("#feels-like");
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", function () {
  const cityInput = document.querySelector("#location-input").value;
  console.log(cityInput);
  getWeatherData(cityInput);
});

async function getWeatherData() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=5D4SKF7KE8J8ETEQJBJ39GNCW&contentType=json",
      { mode: "cors" },
    );

    const weatherJSON = await response.json();

    cityName.innerHTML = weatherJSON.resolvedAddress;
    currentTemp.innerHTML = weatherJSON.currentConditions.temp;
    feelsLike.innerHTML = weatherJSON.currentConditions.feelslike;
  } catch (err) {
    console.log(err);
    return alert("Oh no! Please input a real city");
  }
}
