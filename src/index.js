import "./styles.css";

async function getWeatherData() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=5D4SKF7KE8J8ETEQJBJ39GNCW&contentType=json",
      { mode: "cors" },
    );

    const weatherData = await response.json();
    console.log(weatherData);
  } catch (err) {
    console.log(err);
    return alert("Oh no! Something went wrong");
  }
}

getWeatherData();
