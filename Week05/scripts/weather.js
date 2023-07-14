const curTempF = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=7c8443ce526b9b853f9db962f453a6a7";

async function getWeatherData() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw new Error("Failed to fetch data.");
    }
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

getWeatherData();

function displayResults(data) {
  curTempF.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
