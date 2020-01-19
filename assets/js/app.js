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

// function findMatch() {
// 	for (let i = 0; i < goodMatch.length; i++) {
// 		if ($(".fakeuser").val() == goodMatch[i]) {
// 			$(".fakeuser").removeClass("hide")
// 		}
// 	}
// }
// goodMatch.includes(compatability)

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
			console.log(response.description);
			$("#daily-scope").text(`${response.description}`)
	});
};

//Event for user selecting birthday from dropdown!
// var selectedSign = $("#birthday-input").children("option:selected").val();
// console.log(selectedSign);


// $("#birthday-input").change(function(){
// 	//takes user birthday input and saves it to local storage
// 	selectedSign = $(this).children("option:selected").val();
// 	console.log(selectedSign);
// 	let savedSign = JSON.parse(localStorage.getItem("savedSign")) || [];
// 	savedSign.push(selectedSign);
// 	localStorage.setItem("savedSign", JSON.stringify(savedSign));
// 	console.log(savedSign[savedSign.length - 1]);
// 	//takes last item in local storage and submits it to api
// 	selectedSign = savedSign[savedSign.length - 1];
// 	scopeURL = "https://aztro.sameerkumar.website?sign="+selectedSign+"&day=today";
// 	getScope();
// });


function horoscopeSetLocalStorage(userzip) {
let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
savedZip.push(userzip);
localStorage.setItem("savedZip", JSON.stringify(savedZip));
userzip = savedZip[savedZip.length - 1];
userzip = parseInt(userzip);
}

var distanceDisplays = [$("#user1-distance"), $("#user2-distance"), $("#user3-distance"), $("#user4-distance"), $("#user5-distance"), $("#user6-distance"), $("#user7-distance"), $("#user8-distance"), $("#user9-distance"), $("#user10-distance"), $("#user11-distance"), $("#user12-distance"), $("#user13-distance"), $("#user14-distance"), $("#user15-distance"), $("#user16-distance"), $("#user17-distance"), $("#user18-distance"), $("#user19-distance"), $("#user20-distance"), $("#user21-distance"), $("#user22-distance"), $("#user23-distance"), $("#user24-distance")];

//MAPQUEST
let mapAPIKey = "19ObWX0Nw2vIDzYqg9vODBXcBzvsPj1l";
//original format:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
//original directions url:
//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`
//This variable will be the fake user's zip (determined by compatability?):

let fakeuserzip = 01451;
//Initializing user zip code:
let userzip;
var distance;
function mapAjaxCall() {
	
	$.ajax({
		url: mapQueryUrl,
		method: "GET",
	}).then(function (response) {
		distance = response.route.distance;
		console.log(distance);
		console.log(response);
		for (i=0; i<allFakeUsers; i++) {
			allFakeUsers[i].distancetext.text(distance);
		}
		// return distance;
	});
};

function mapSetLocalStorage(userzip) {
	let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
	savedZip.push(userzip);
	localStorage.setItem("savedZip", JSON.stringify(savedZip));
	userzip = savedZip[savedZip.length - 1];
}

// $("select#zipcodes").change(function () {
// 	userzip = $(this).children("option:selected").val();
// 	mapSetLocalStorage(userzip)
// 	mapQueryUrl = `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[0].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`
// 	mapAjaxCall();
// });


var allFakeUsers = [
	fakeUser1 = {
		zip: 20017,
		distancetext: $("#user1-distance"),
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
	fakeuser14= {
		distancetext: $("#user14-distance"),
		zip: 20307
	},
	fakeuser15= {
		distancetext: $("#user15-distance"),
		zip: 20388
	},
	fakeuser16= {
		distancetext: $("#user16-distance"),
		zip: 20439
	},
	fakeuser17= {
		distancetext: $("#user17-distance"),
		zip: 20268
	},
	fakeuser18= {
		distancetext: $("#user18-distance"),
		zip: 20097
	},
	fakeuser19= {
		distancetext: $("#user19-distance"),
		zip: 20404
	},
	fakeuser20= {
		distancetext: $("#user20-distance"),
		zip: 20237
	},
	fakeuser21= {
		distancetext: $("#user21-distance"),
		zip: 20444
	},
	fakeuser22= {
		distancetext: $("#user22-distance"),
		zip: 20241
	},
	fakeuser23= {
		distancetext: $("#user23-distance"),
		zip: 20580
},
	fakeuser24= {
		distancetext: $("#user24-distance"),
		zip: 56999
	},
	fakeuser25= {
		distancetext: $("#user25-distance"),
		zip: 20555
	}
]
console.log($("#user25-distance")[0].getAttribute("value"));



$("#showHor").on("click",function() {
	userzip = $("#zipcodes :selected").val(); // The value of the selected option
	console.log(userzip);
	selectedSign = $("#birthday-input :selected").val();
	console.log(selectedSign);
	scopeURL = "https://aztro.sameerkumar.website?sign="+selectedSign+"&day=today";
	var urls = [];
	// var geturls = function () {
	for (i=0; i<allFakeUsers.length; i++) {
		mapQueryUrl = `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userzip}&to=${allFakeUsers[i].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`
		// console.log(mapQueryUrl);
		allFakeUsers[i].distancetext.text("boo");
		// urls.push(distance);
		// console.log(urls);
	}
	// }
	mapAjaxCall();


	// 	distanceDisplays[i].append(mapAjaxCall()`${response.route.distance}`);

	// }
	getScope();
	
	// console.log(getZips());
	// var distances = [];
	//  {
		
	// }
	});
	// console.log(distances);
// });



	
	// mapAjaxCall();

// });

// console.log(Object.keys(allFakeUsers));
