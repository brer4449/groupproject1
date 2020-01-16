// Carousel
$(document).ready(function () {
  $('select').formSelect();
  $('.carousel').carousel();
});


// HOROSCOPE API WORKS BIYATCHES!
// var settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today",
//   method: "POST",
//   headers: {
//     "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
//     "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
//     "content-type": "application/x-www-form-urlencoded"
//   },
//   data: {}
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// })

// Show table on Click
// $(showLovers).on("click", function () {
//   $("#weHere").removeClass("hide");
// })

//MAPQUEST
let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
//original format:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`
//This variable will be the fake user's zip (determined by compatability?):
let fakeuserzip = "80303";
//Initializing user zip code:
let userzip;


let distanceSettings =
{
  url: mapQueryUrl,
  method: "GET",
};

//original directions url:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
//This lets us put in directions (by zip code)



function mapAjaxCall() {
  $.ajax({
    url: mapQueryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(mapQueryUrl);
    console.log(response);
    console.log(typeof userzip);
  })
}

$("select#zipcodes").change(function () {
  userzip = $(this).children("option:selected").val();
  let zipToSave = userzip;
  let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
  savedZip.push(zipToSave);
  localStorage.setItem("savedZip", JSON.stringify(savedZip));
  //changing the value of userzip variable to be the last item of the savedZip array:
  userzip = savedZip[savedZip.length - 1];
  userzip = parseInt(userzip);
  mapQueryUrl = `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${fakeuserzip}&to=${userzip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`
  mapAjaxCall();

});




