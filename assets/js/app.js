// Carousel
$(document).ready(function () {

  $('.carousel').carousel();
  
  $('select').formSelect();
  //This lets us put in a specific location (by zip in this case)
  let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
  //original format:
  //https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
  let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`

  $.ajax({
    url: mapQueryUrl,
    method: "GET",
  }).then(function (response) {
    //check out the console.log! It works ;)
    console.log(response)
  })
});

$(showLovers).on("click", function() {
  $("#weHere").removeClass("hide");
})