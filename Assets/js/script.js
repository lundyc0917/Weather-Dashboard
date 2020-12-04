var searchEl = document.getElementById("searchBtn")
var apiKey = "a5599c7df51f4d43c94489d4ea681d06";



// function to return the url to find the city.
function returnWeather(){
    var cityName = $("#cityName").val().trim();

    console.log(cityName);

    var cityURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid="+apiKey;
    console.log(cityURL);
   
    $.ajax({
        url: cityURL,
        method: "GET"
    })

    .then(function(response) {
        var temp = $("<p>").text(response.main.temp);
        $("#temp").append(temp);
        var humidity = $("<p>").text(response.main.humidity);
        $("#humidity").append(humidity);
        var windSpeed = $("<p>").text(response.wind.speed);
        $("#wind").append(windSpeed);
    });



    
}

// function to run once the search button is clicked
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var searchURL = returnWeather();
    return searchURL;

  });