var cityNameEl = document.getElementById("cityName");
var searchEl = document.getElementById("searchBtn")
var apiKey = "a5599c7df51f4d43c94489d4ea681d06";




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