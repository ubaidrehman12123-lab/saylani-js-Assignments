// api weather-api link = https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

const container = document.querySelector(".container");
const userInput = document.querySelector("#input");
const searchBtn = document.querySelector("button");

let parentDiv = document.querySelector(".parntDiv");
let message = document.querySelector(".span");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
let latitude = document.querySelector("#latitude");
let longitude = document.querySelector("#longitude");

searchBtn.addEventListener("click", () => {
  let userPromt = userInput.value.trim().toLowerCase();

  if (userPromt === "") {
    userInput.placeholder = "Please Enter a city name";
    userInput.style.border = "1px solid red";
    return;
  }
  getData(userPromt);
});

const getData = async (userPromt) => {
  try {
    let request = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(userPromt)}&countryCode=PK&count=1&language=en&format=json`,
    );

    let apiData = await request.json();

    console.log(apiData);

    let weatherData = apiData.results || [];

    if (weatherData.length === 0) {
      city.innerText = "--";
      country.innerText = "--";
      latitude.innerText = "--";
      longitude.innerText = "--";

      message.innerText = `${userPromt} - City not found`;
      return;
    }

    let data = weatherData[0];

    city.innerText = data.name;
    country.innerText = data.country;
    latitude.innerText = data.latitude;
    longitude.innerText = data.longitude;

    message.innerText = "";
  } catch (error) {
    console.log(error);
    message.innerText = "Something went wrong. Try again!";
  }
};
