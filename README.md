# Weather-Dashboard
Weather Dashboard to view weather in a specific city.

## Link to Site
https://lundyc0917.github.io/Weather-Dashboard/

## Motivation
Create a site where users can go and search for a city and see the current weather as well as the forecast for the next 5 days.

## Build Status
build | working

## Screen Shot
![weather-dashboard](https://user-images.githubusercontent.com/71233342/102418473-ce7ad700-3fcb-11eb-8eb4-ddc039524487.png)


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
function returnWeather(searchCity){
    // console.log(searchCity);
    
    const settings = {
        "url" : "https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=imperial&appid="+apiKey,
        "method" : "GET"
    }

    $.ajax(settings).done(function (response){
        // console.log(response);

        var temperature = response.main.temp;
        var humidity = response.main.humidity;
        var windSpeed =response.wind.speed;

        $("#weatherInfo").html("<h2>"+searchCity+"</h2><p>Temperature: "+temperature+"</p><p>Humidity: "+humidity+"</p><p>Wind Speed: "+windSpeed+"</p>");

        uvReturn(response.coord.lon, response.coord.lat);
        returnForecast(response.coord.lon, response.coord.lat);
    });
}


function uvReturn(lon, lat){
    const settings = {
        "url" : "https://api.openweathermap.org/data/2.5/uvi?appid="+apiKey+"&lat="+lat+"&lon="+lon,
        "method" : "GET"
    }
    
    $.ajax(settings).done(function (response){
        console.log(response);
        var uvIndex = response.value;
        if (uvIndex <= "2"){
            $("#weatherInfo").append("<p>UV Index: <a class='bg-success'>"+uvIndex+"</a></p>");
        } else if(uvIndex >"2" && uvIndex < "6"){
            $("#weatherInfo").append("<p>UV Index: <a class='bg-warning'>"+uvIndex+"</a></p>");
        } else{
            $("#weatherInfo").append("<p>UV Index: <a class='bg-danger'>"+uvIndex+"</a></p>");
        }
    });
}
`````````````````````````
