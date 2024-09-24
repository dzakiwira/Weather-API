import "./styles.css";

const cityName = document.querySelector("#city-name");
const currentTemp = document.querySelector("#current-temp");
const conditions = document.querySelector("#feels-like");
const cityForm = document.querySelector("#myForm");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userCity = document.querySelector("#location-input");

  if (userCity.value == "") {
    userCity.setCustomValidity("Make sure to input a City");
  } else {
    console.log(userCity.value);
    getWeatherData(userCity.value);
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=5D4SKF7KE8J8ETEQJBJ39GNCW&contentType=json`,
      { mode: "cors" },
    );
    const weatherJSON = await response.json();
    parseData(weatherJSON);

    cityName.innerHTML = weatherJSON.resolvedAddress;
    currentTemp.innerHTML =
      Math.round(weatherJSON.currentConditions.temp) + "\u00B0";
    conditions.innerHTML = weatherJSON.currentConditions.conditions;
  } catch (error) {
    console.error(error);
    return alert("Oh no! Please input another city");
  }
}

// extract data and return obj
function parseData(data) {
  console.log(data);
  let currentCityInfo = {
    city: data.resolvedAddress,
    temp: Math.round(data.currentConditions.temp) + "\u00B0",
    conditions: data.currentConditions.conditions,
  };
  return { currentCityInfo };
}
