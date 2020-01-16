// Initialization on document ready
$(document).ready(function () {
  $('select').formSelect();
  $('.collapsible').collapsible();
  $('.carousel').carousel();
  autoplay();
});

// Carousel auto slide
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3000);
}

// HOROSCOPE API WORKS BIYATCHES!
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today",
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {}
}

// $.ajax(settings).done(function (response) {
//   console.log(response);
// })

// Show table on Click
$(showLovers).on("click", function () {
  $("#weHere").removeClass("hide");
})

//MAPQUEST
let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
//original format:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`
let targetzip = 80303;
let userzip = 80021;
//original directions url:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
//This lets us put in directions (by zip code)
mapQueryUrl = `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${targetzip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`


$.ajax({
  url: mapQueryUrl,
  method: "GET",
}).then(function (response) {
  //check out the console.log! It works ;)
  console.log(response.route.distance)
})