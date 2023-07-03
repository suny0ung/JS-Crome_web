const WEATHER_API_KEY = config.apikey;
const cityName = document.querySelector(".weather-wrap span:first-child");
const weatherName = document.querySelector(".weather-wrap span:last-child");

function getGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityName.innerText = data.name;
      weatherName.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function getGeoError() {
  alert("날씨 찾기를 실패했습니다🙁");
}

navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
