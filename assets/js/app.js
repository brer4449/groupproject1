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
$("#showHor").on("click", function () {
	$("#inputDataHere").addClass("hide");
	$("#daily").removeClass("hide");
})

// Show Cards on Click
$("#showLovers").on("click", function () {
	$("#daily").addClass("hide");
	$("#weHere").removeClass("hide");
})
// Hide Cards on Click
$("#hideLovers").on("click", function () {
	$("#daily").removeClass("hide");
	$("#weHere").addClass("hide");
})
//MAPQUEST
let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
//original format:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
//original directions url:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`
//This variable will be the fake user's zip (determined by compatability?):
let fakeuserzip = 20895;
//Initializing user zip code:
let userzip;

function mapAjaxCall() {
	$.ajax({
		url: mapQueryUrl,
		method: "GET",
	}).then(function (response) {
		let distance = response.route.distance
		console.log(distance);
		console.log(response);
		$("p#test").text(distance);
	})
}

function mapSetLocalStorage(userzip) {
	let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
	savedZip.push(userzip);
	localStorage.setItem("savedZip", JSON.stringify(savedZip));
	userzip = savedZip[savedZip.length - 1];
	userzip = parseInt(userzip);
}
$("select#zipcodes").change(function () {
	userzip = $(this).children("option:selected").val();
	mapSetLocalStorage(userzip)
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

	//Event for user selecting birthday from dropdown!
	// var selectedSign = $("#birthday-input").children("option:selected").val();
	// console.log(selectedSign);

	function showHoroscope () {
		let btn = $("#showHor");
		btn.on("click", function(e) {

		})
	};


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





// //cancer matches:
// ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pices"]

// switch (signThatUserIs) {
// 	case "aries":
// 		goodMatch = "Pisces"
// 		break;
// 	case "taurus":
// 		goodMatch = ""
// 		break;
// 	case "gemini":
// 		goodMatch = ""
// 		break;
// 	case "cancer":
// 		goodMatch = ""
// 		break;
// 	case "leo":
// 		goodMatch = ""
// 		break;
// 	case "virgo":
// 		goodMatch = ""
// 		break;
// 	case "libra":
// 		goodMatch = ""
// 		break;
// 	case "scorpio":
// 		goodMatch = ""
// 		break;
// 	case "sagittarius":
// 		goodMatch = ""
// 		break;
// 	case "capricorn":
// 		goodMatch = ""
// 		break;
// 	case "aquarius":
// 		goodMatch = ""
// 		break;
// 	case "pisces":
// 		goodMatch = ""
// 		break;
// 	default:
// 		alert('Enter a sign')
// 		break;
// }


var allFakeUsers = [
	fakeUser1 = {
		spot: $("#user1-distance"),
		zip: 20017
	}
]