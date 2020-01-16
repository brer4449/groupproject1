// Carousel
$(document).ready(function () {
  $('select').formSelect();
  $('.carousel').carousel();



// HOROSCOPE API WORKS BIYATCHES!
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign='+sign+'&day=today",
//   "method": "POST",
//   "headers": {
//     "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
//     "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
//     "content-type": "application/x-www-form-urlencoded"
//   },
//   "data": {}
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// })  

//on click event for grabbing user info
var e = $("#birthday-input");
var sign = e.options[e.selectedIndex].value;

   // $("#birthday-input".option).on("click", function(){
      // let sign = $('#birthday-input option:selected').val();
      let scopeURL = "https://aztro.sameerkumar.website?sign="+sign+"&day=today";
   let scopeApiKey = "db33035934mshd1b34ca9cd0fe88p1ebc13jsnd29e5614fd22"
   function getScope(star){
      $.ajax({
         type:'POST',
         url: scopeURL,
         data: {
            q: star,
            appid: scopeApiKey
      }
      }).then(function(response) {
         console.log(response);
      });
   };
   
   getScope();
   // });
   

   

// Show table on Click
// $(showLovers).on("click", function () {
//   $("#weHere").removeClass("hide");
// })

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
});