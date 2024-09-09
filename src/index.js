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
    // perform operation with form input
    console.log(userCity.value);
    getWeatherData(userCity.value);
  }
});

// fetch data and await info before updating
async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=5D4SKF7KE8J8ETEQJBJ39GNCW&contentType=json`,
      { mode: "cors" },
    );
    const weatherJSON = await response.json();
    // update divs with newly aquired data
    cityName.innerHTML = weatherJSON.resolvedAddress;
    currentTemp.innerHTML =
      Math.round(weatherJSON.currentConditions.temp) + "\u00B0";
    conditions.innerHTML = weatherJSON.currentConditions.conditions;
    // catch errors and display in console
  } catch (error) {
    console.error(error);
    return alert("Oh no! Please input another city");
  }
}
