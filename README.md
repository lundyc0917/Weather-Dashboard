# Weather-Dashboard
Weather Dashboard to view weather in a specific city.

## Link to Site
https://lundyc0917.github.io/Weather-Dashboard/

## Motivation
Create a site where users can go and search for a city and see the current weather as well as the forecast for the next 5 days.

## Build Status
build | in-progress

## Screen Shot
![empty_screenshot](https://user-images.githubusercontent.com/71233342/101119114-9f6e6980-35b8-11eb-8f8c-040240027d19.png)


## Framework

Built Using:
 - JavaScript
 - HTML
 - Bootstrap

## Features

When the user enters a city name and hits "search", they are shown the current temperature, humidity, wind speed, uv index, and 5-day forecast for the selected city.

## Code Example

.js code

`````````````````````````
function returnWeather(){
    cityNameEl = $("#cityName").val().trim();

    console.log(cityNameEl);

    var cityURL = "https://api.openweathermap.org/data/2.5/weather?id="+cityNameEl+"&appid="+apiKey;
    console.log(cityURL);
    return cityURL;
}

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var searchURL = returnWeather();
    console.log(searchURL);
    return searchURL;

  });
`````````````````````````
