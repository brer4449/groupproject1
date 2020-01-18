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
	});
};

function horoscopeSetLocalStorage(userzip) {
	let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
	savedZip.push(userzip);
	localStorage.setItem("savedZip", JSON.stringify(savedZip));
	userzip = savedZip[savedZip.length - 1];
	userzip = parseInt(userzip);
}


//MAPQUEST
let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
//original directions url:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`
//This variable will be the fake user's zip (determined by compatability?):
let fakeuserzip;
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
		distancetext: $("#user1-distance"),
		zip: 20017
	},
	fakeUser2 = {
		distancetext: $("#user2-distance"),
		zip: 20068
	},
	fakeUser3 = {
		distancetext: $("#user3-distance"),
		zip: 20208
	},
	fakeUser4 = {
		distancetext: $("#user4-distance"),
		zip: 20241
	},
	fakeUser5 = {
		distancetext: $("#user5-distance"),
		zip: 20380
	},
	fakeUser6 = {
		distancetext: $("#user6-distance"),
		zip: 20412
	},
	fakeUser7 = {
		distancetext: $("#user7-distance"),
		zip: 20422
	},
	fakeUser8 = {
		distancetext: $("#user8-distance"),
		zip: 20456
	},
	fakeUser9 = {
		distancetext: $("#user9-distance"),
		zip: 20261
	},
	fakeUser10 = {
		distancetext: $("#user10-distance"),
		zip: 20057
	},
	fakeUser11 = {
		distancetext: $("#user11-distance"),
		zip: 20002
	},
	fakeUser12 = {
		distancetext: $("#user12-distance"),
		zip: 20074
	},
	fakeUser13 = {
		distancetext: $("#user13-distance"),
		zip: 20221
	},
	fakeuser14 = {
		distancetext: $("#user14-distance"),
		zip: 20307
	},
	fakeuser15 = {
		distancetext: $("#user15-distance"),
		zip: 20388
	},
	fakeuser16 = {
		distancetext: $("#user16-distance"),
		zip: 20439
	},
	fakeuser17 = {
		distancetext: $("#user17-distance"),
		zip: 20268
	},
	fakeuser18 = {
		distancetext: $("#user18-distance"),
		zip: 20097
	},
	fakeuser19 = {
		distancetext: $("#user19-distance"),
		zip: 20404
	},
	fakeuser20 = {
		distancetext: $("#user20-distance"),
		zip: 20237
	},
	fakeuser21 = {
		distancetext: $("#user21-distance"),
		zip: 20444
	},
	fakeuser22 = {
		distancetext: $("#user22-distance"),
		zip: 20241
	},
	fakeuser23 = {
		distancetext: $("#user23-distance"),
		zip: 20580
	},
	fakeuser24 = {
		distancetext: $("#user24-distance"),
		zip: 56999
	},
	fakeuser25 = {
		distancetext: $("#user25-distance"),
		zip: 20555
	}
]


var APIcalls = $("#showHor").on("click", function (e) {
	userzip = $("#zipcodes :selected").val(); // The value of the selected option
	console.log(userzip);
	selectedSign = $("#birthday-input :selected").val();
	console.log(selectedSign);
	getScope();
});

//on the right track? not quite right tho
// let goodMatch;
// let i;
// function comparingMatches(goodMatch, i) {
// 	let fakeUserSign = $(`#fakeuser${i}`).attr("value");
// 	if (fakeUserSign == goodMatch[i]) {
// 		console.log(`In the if statement: ${goodMatch[i]}`);
// 		$(`#fakeuser${i}`).removeClass("hide") //this just goes through and takes off hide class from all fakeusers)
// 	}
// }

//function to go through all the different fake users and check what compatability there is (aka goodMatch array)
function findMatch(goodMatch) {
	for (let i = 1; i < 26; i++) {
		let fakeUserSign = $(`#fakeuser${i}`).attr("value")
		// console.log(goodMatch.includes(fakeUserSign));
		// console.log(`In the for loop: ${goodMatch[i]}`);
		// comparingMatches(goodMatch, i); //this was for the failed function above
		// if (fakeUserSign == goodMatch[i]) {
		// console.log(`In the if statement: ${goodMatch[i]}`);
		// $(`#fakeuser${i}`).removeClass("hide") //this just goes through and takes off hide class from all fakeusers
		// console.log(goodMatch[i]) // returning nothing, undefined?
		console.log(allFakeUsers[i].zip);
	}
	// console.log($(`#fakeuser${i}`).attr("value")) //this shows the sign of each user (as expected)
	// }
	console.log(goodMatch);	//this returns the goodMatch array of whatever sign you click on!
}


function compatability() {
	switch (selectedSign) {
		case "aries":
			goodMatch = ["pisces", "aries", "leo", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch);
			console.log(findMatch(goodMatch)); //this is undefined!!
			break;
		case "taurus":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch);
			break;
		case "gemini":
			goodMatch = ["aries", "leo", "gemini", "libra", "aquarius"]
			findMatch(goodMatch);
			break;
		case "cancer":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch);
			break;
		case "leo":
			goodMatch = ["aries", "leo", "sagittarius", "gemini", "libra"]
			findMatch(goodMatch);
			break;
		case "virgo":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio"]
			findMatch(goodMatch);
			break;
		case "libra":
			goodMatch = ["leo", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch);
			break;
		case "scorpio":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch);
			break;
		case "sagittarius":
			goodMatch = ["aries", "leo", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch);
			break;
		case "capricorn":
			goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch);
			break;
		case "aquarius":
			goodMatch = ["leo", "aries", "sagittarius", "gemini", "libra", "aquarius"]
			findMatch(goodMatch);
			break;
		case "pisces":
			goodMatch = ["taurus", "capricorn", "cancer", "scorpio", "pisces"]
			findMatch(goodMatch);
			break;
		default:
			alert('Enter a sign')
			break;
	}
	// console.log(goodMatch); //when sign is selected, that sign's goodMatch returns here! (as expected)
}

// Show Cards on Click
$("#showLovers").on("click", function () {
	$("#daily").addClass("hide");
	$("#weHere").removeClass("hide");
	compatability();
})
// Hide Cards on Click- pretty sure this does nothing? Couldn't find anything with a "hideLovers" id
$("#hideLovers").on("click", function () {
	$("#daily").removeClass("hide");
	$("#weHere").addClass("hide");
})