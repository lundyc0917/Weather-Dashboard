var apiKey = "a5599c7df51f4d43c94489d4ea681d06";

// function to run once the search button is clicked
$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var searchCity = $("#cityName").val().trim();


    var recentStorage = $(this).siblings("#cityName").val();
    localStorage.setItem("recentSearch", recentStorage);

    returnWeather(searchCity);
    cityRecent(searchCity);
});

function cityRecent(){
    var recallCity = localStorage.getItem("recentSearch");
    var cityReturn = $("<button class='btn'>").text(recallCity);
    var searchReturn = $("<a>");
    searchReturn.append(cityReturn);
    $("#recentCityList").prepend(cityReturn);
  }
  
  // recall city on click
$("#recentCityList").on("click", ".btn", function(event){
event.preventDefault();
returnWeather($(this).text());
});


// function to return the url to find the city.
function returnWeather(searchCity){
    console.log(searchCity);
    
    const settings = {
        "url" : "https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=imperial&appid="+apiKey,
        "method" : "GET"
    }

    $.ajax(settings).done(function (response){
        console.log(response);

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
        var uvIndex = response.value;
        $("#weatherInfo").append("<p>UV Index: "+uvIndex+"</p>");
    });
}

function returnForecast (lon, lat){
    const settings= {
        "url": "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=current,minutely,hourly,alerts&appid="+apiKey,
        "method": "GET"
    }
    $("#5dayForecast").html("<h2>5 day forecast</h2><div class='row' id='dayForecast'></div>")
    $.ajax(settings).done(function (response){
        console.log(response);
        for(let i=0; i < 5; i++){
            var tempLow = response.daily[i].temp.min;
            var tempHigh = response.daily[i].temp.max;
            var weatherDate = moment.unix(response.daily[i].dt).format("M/D/YYYY");
            var iconLink = "'http://openweathermap.org/img/wn/"+response.daily[i].weather[0].icon+"@2x.png'";
            $("#dayForecast").append("<div class='card'><div class='card-body bg-primary text-white'><h5>"+weatherDate+"</h5><img src="+iconLink+"><p> High: "+tempHigh+"</p><p> Low: "+tempLow+"</p></div></div>");
        }
    });
}