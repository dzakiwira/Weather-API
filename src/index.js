import "./styles.css";

const cityName = document.querySelector("#cityName");
const currentTemp = document.querySelector("#current-temp");
const feelsLike = document.querySelector("#feels-like");
const cityForm = document.querySelector("#myForm");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userCity = document.querySelector("#location-input");

  if (userCity.value == "") {
    userCity.setCustomValidity("Make sure to input a City");
  } else {
    // perform operation with form input
    console.log(userCity.value);
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=5D4SKF7KE8J8ETEQJBJ39GNCW&contentType=json`,
      { mode: "cors" },
    );
    const weatherJSON = await response.json();

    cityName.innerHTML = weatherJSON.resolvedAddress;
    currentTemp.innerHTML = weatherJSON.currentConditions.temp;
    feelsLike.innerHTML = weatherJSON.currentConditions.feelslike;
  } catch (error) {
    console.error(error);
    // return alert("Oh no! Please input a real city");
  }
}
