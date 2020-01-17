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

//  Show Horoscope on click
$(showHor).on("click", function () {
  $("#inputDataHere").addClass("hide");
  $("#daily").removeClass("hide");
})

// Show Cards on Click
$(showLovers).on("click", function () {
  $("#daily").addClass("hide");
  $("#weHere").removeClass("hide");
})

// Hide Cards on Click
$(hideLovers).on("click", function () {
  $("#daily").removeClass("hide");
  $("#weHere").addClass("hide");
})

//MAPQUEST
let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
//original format:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
//original directions url:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
//This lets us put in directions (by zip code)
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


	//variables for horoscope api
	let scopeURL = "https://aztro.sameerkumar.website?sign=aries&day=today";
	let scopeApiKey = "db33035934mshd1b34ca9cd0fe88p1ebc13jsnd29e5614fd22"
	//horoscope api call function
	function getScope(){
		
		$.ajax({
					type:'POST',
					url: scopeURL,
					data: {
						appid: scopeApiKey
					}
		}).then(function(response) {
				console.log(response);
		});
	};

	function horoscopeSetLocalStorage(userzip) {
		let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
		savedZip.push(userzip);
		localStorage.setItem("savedZip", JSON.stringify(savedZip));
		userzip = savedZip[savedZip.length - 1];
		userzip = parseInt(userzip);
	}
	
	$("#birthday-input").change(function(){
		//takes user birthday input and saves it to local storage
		selectedSign = $(this).children("option:selected").val();
		console.log(selectedSign);
		let savedSign = JSON.parse(localStorage.getItem("savedSign")) || [];
		savedSign.push(selectedSign);
		localStorage.setItem("savedSign", JSON.stringify(savedSign));
		console.log(savedSign[savedSign.length - 1]);
		//takes last item in local storage and submits it to api
		selectedSign = savedSign[savedSign.length - 1];
		scopeURL = "https://aztro.sameerkumar.website?sign="+selectedSign+"&day=today";
		
		getScope();

	});
