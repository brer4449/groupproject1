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
//variables for horoscope api
let scopeURL = "https://aztro.sameerkumar.website?sign=aries&day=today";
let scopeApiKey = "db33035934mshd1b34ca9cd0fe88p1ebc13jsnd29e5614fd22"
//horoscope api call function
function getScope() {
	$.ajax({
		type: 'POST',
		url: scopeURL,
		data: {
			appid: scopeApiKey
		}
	}).then(function (response) {
		console.log(response.description);
		$("#daily-scope").text(`${response.description}`)

	});
};
function horoscopeSetLocalStorage(userzip) {
	let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
	savedZip.push(userzip);
	localStorage.setItem("savedZip", JSON.stringify(savedZip));
	userzip = savedZip[savedZip.length - 1];
	userzip = parseInt(userzip);
}

var alldemusers = [$("#user0-distance"), $("#user1-distance"), $("#user2-distance"), $("#user3-distance"), $("#user4-distance"), $("#user5-distance"), $("#user6-distance"), $("#user7-distance"), $("#user8-distance"), $("#user9-distance"), $("#user10-distance"), $("#user11-distance"), $("#user12-distance"), $("#user13-distance"), $("#user14-distance"), $("#user15-distance"), $("#user16-distance"), $("#user17-distance"), $("#user18-distance"), $("#user19-distance"), $("#user20-distance"), $("#user21-distance"), $("#user22-distance"), $("#user23-distance"), $("#user24-distance")]
//MAPQUEST
let mapAPIKey = "wfAvATrJ0FOfJ0vTKskRjvLYXVZxVKAA";
//original directions url:
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`
//This variable will be the fake user's zip (determined by compatability?):
let fakeuserzip;
//Initializing user zip code:
let userzip = 20895;
let distance;

mapQueryUrl = `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${fakeuserzip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`;

function mapAjaxCall0() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[0].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user0-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapSetLocalStorage(userzip) {
	let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
	savedZip.push(userzip);
	localStorage.setItem("savedZip", JSON.stringify(savedZip));
	userzip = savedZip[savedZip.length - 1];
}
//array of objects of all the fakeusers with their zip and jquery selector of where the distance will go
let allFakeUsers = [
	fakeUser1 = {
		distancetext: $("#user0-distance"),
		zip: 20017,
		mapQueryUrl: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${20017}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`
	},
	fakeUser2 = {
		distancetext: $("#user1-distance"),
		zip: 20068
	},
	fakeUser3 = {
		distancetext: $("#user2-distance"),
		zip: 20208
	},
	fakeUser4 = {
		distancetext: $("#user3-distance"),
		zip: 20241
	},
	fakeUser5 = {
		distancetext: $("#user4-distance"),
		zip: 20380
	},
	fakeUser6 = {
		distancetext: $("#user5-distance"),
		zip: 20412
	},
	fakeUser7 = {
		distancetext: $("#user6-distance"),
		zip: 20422
	},
	fakeUser8 = {
		distancetext: $("#user7-distance"),
		zip: 20456
	},
	fakeUser9 = {
		distancetext: $("#user8-distance"),
		zip: 20261
	},
	fakeUser10 = {
		distancetext: $("#user9-distance"),
		zip: 20057
	},
	fakeUser11 = {
		distancetext: $("#user10-distance"),
		zip: 20002
	},
	fakeUser12 = {
		distancetext: $("#user11-distance"),
		zip: 20074
	},
	fakeUser13 = {
		distancetext: $("#user12-distance"),
		zip: 20221
	},
	fakeuser14 = {
		distancetext: $("#user13-distance"),
		zip: 20307
	},
	fakeuser15 = {
		distancetext: $("#user14-distance"),
		zip: 20388
	},
	fakeuser16 = {
		distancetext: $("#user15-distance"),
		zip: 20439
	},
	fakeuser17 = {
		distancetext: $("#user16-distance"),
		zip: 20268
	},
	fakeuser18 = {
		distancetext: $("#user17-distance"),
		zip: 20097
	},
	fakeuser19 = {
		distancetext: $("#user18-distance"),
		zip: 20404
	},
	fakeuser20 = {
		distancetext: $("#user19-distance"),
		zip: 20237
	},
	fakeuser21 = {
		distancetext: $("#user20-distance"),
		zip: 20444
	},
	fakeuser22 = {
		distancetext: $("#user21-distance"),
		zip: 20241
	},
	fakeuser23 = {
		distancetext: $("#user22-distance"),
		zip: 20580
	},
	fakeuser24 = {
		distancetext: $("#user23-distance"),
		zip: 20237
	},
	fakeuser25 = {
		distancetext: $("#user24-distance"),
		zip: 20555
	}
]
function findMatch(goodMatch, allFakeUsers) {
	for (let i = 0; i < allFakeUsers.length; i++) {
		fakeUserSign = $(`#fakeuser${i}`).attr("value")
		// console.log(fakeUserSign);
		if (goodMatch.includes(fakeUserSign)) {
			$(`#fakeuser${i}`).removeClass("hide") //this just goes through and takes off hide class compatible fakeusers
		}
	}
}

function compatability() {
	switch (selectedSign) {
		case "aries":
			goodMatch = ["pisces", "aries", "leo", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "taurus":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "gemini":
			goodMatch = ["aries", "leo", "gemini", "libra", "aquarius"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "cancer":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "leo":
			goodMatch = ["aries", "leo", "sagittarius", "gemini", "libra"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "virgo":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "libra":
			goodMatch = ["leo", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "scorpio":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "sagittarius":
			goodMatch = ["aries", "leo", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "capricorn":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "aquarius":
			goodMatch = ["leo", "aries", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch, allFakeUsers);
			break;
		case "pisces":
			goodMatch = ["taurus", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch, allFakeUsers);
			break;
		default:
			alert('Enter a sign')
			break;
	}
}





// function map1 () {

// }


$(document).on("click", "#showHor", function() {
	userzip = $("#zipcodes :selected").val(); // The value of the selected option
	console.log(userzip);
	selectedSign = $("#birthday-input :selected").val();
	console.log(selectedSign);
	scopeURL = "https://aztro.sameerkumar.website?sign="+selectedSign+"&day=today";
	getScope();
	mapAjaxCall0();
	mapAjaxCall1();
	mapAjaxCall2();
	mapAjaxCall3();
	mapAjaxCall4();
	mapAjaxCall5();
	mapAjaxCall6();
	mapAjaxCall7();
	mapAjaxCall8();
	mapAjaxCall9();
	mapAjaxCall10();
	mapAjaxCall11();
	mapAjaxCall12();
	mapAjaxCall13();
	mapAjaxCall14();
	mapAjaxCall15();
	mapAjaxCall16();
	mapAjaxCall17();
	mapAjaxCall18();
	mapAjaxCall19();
	mapAjaxCall20();
	mapAjaxCall21();
	mapAjaxCall22();
	mapAjaxCall23();
	mapAjaxCall24();
});


// Show Cards on Click
$("#showLovers").on("click", function () {
	$("#daily").addClass("hide");
	$("#weHere").removeClass("hide");
	compatability(allFakeUsers);
})
// Hide Cards on Click- pretty sure this does nothing? Couldn't find anything with a "hideLovers" id
$("#hideLovers").on("click", function () {
	$("#daily").removeClass("hide");
	$("#weHere").addClass("hide");
})

function mapAjaxCall1() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[1].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user1-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall2() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[2].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user2-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall3() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[3].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user3-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall4() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[4].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user4-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall5() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[5].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user5-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall6() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[6].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user6-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall7() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[7].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user7-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall8() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[8].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user8-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall9() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[9].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user9-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall10() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[10].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user10-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall11() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[11].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user11-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall12() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[12].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user12-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall13() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[13].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user13-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall14() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[14].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user14-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall15() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[15].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user15-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall16() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[16].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user16-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall17() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[17].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user17-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall18() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[18].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user18-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall19() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[19].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user19-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall20() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[20].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user20-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall21() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[21].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user21-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall22() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[22].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user22-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall23() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[23].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user23-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

function mapAjaxCall24() {
	$.ajax({
		url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[24].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
		method: "GET"
	}).then(function (response){
		console.log(response.route.distance)
		$("#user24-distance").text(`This user is ${response.route.distance} miles away`)
	})
}

