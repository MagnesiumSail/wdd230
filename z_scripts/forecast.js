const forecastContainer = document.querySelector("#forecast");

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.83&lon=-111.82&units=imperial&appid=7c8443ce526b9b853f9db962f453a6a7";

async function getForecastData() {
  try {
    const forecastResponse = await fetch(forecastUrl);
    console.log(forecastResponse);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      console.log(forecastData);
      displayForecastResults(forecastData);
    } else {
      throw new Error("Failed to fetch data.");
    }
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

getForecastData();

function displayForecastResults(forecastData) {
  let forecastMap = new Map();

  // Iterate over each entry in the forecast list
  forecastData.list.forEach(forecast => {
    const dt = new Date(forecast.dt * 1000);
    const date = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;

    // Store only the forecast for midday
    if (dt.getHours() === 12) {
      forecastMap.set(date, forecast);
    }
  });

  // Get the 3 next dates and display the corresponding forecast
  let counter = 0;
  for (let [date, forecast] of forecastMap) {
    if (counter === 3) break;

    const day = document.createElement("div");
    day.innerHTML = `
      <h4>${date}</h4>
      <p>Temp: ${forecast.main.temp}&deg;F</p>
      <p>${forecast.weather[0].description}</p>
      <img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}" />
    `;
    forecastContainer.appendChild(day);

    counter++;
  }
}
