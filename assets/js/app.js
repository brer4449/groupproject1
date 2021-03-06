// Initialization on document ready
$(document).ready(() => {
  $("select").formSelect();
  $(".carousel").carousel();
  autoplay();
});

// Carousel auto slide
autoplay = () => {
  $(".carousel").carousel("next");
  setTimeout(autoplay, 3000);
};

//  Show Horoscope on click
$("#showHor").on("click", () => {
  $("#inputContent").addClass("hide");
  $("#daily").removeClass("hide");
});

//variables for horoscope api
let scopeURL = "https://aztro.sameerkumar.website?sign=aries&day=today";
let scopeApiKey = "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0";

//horoscope api call function
getScope = () => {
  $.ajax({
    type: "POST",
    url: scopeURL,
    data: {
      appid: scopeApiKey,
    },
  }).then((response) => $("#daily-scope").text(`${response.description}`));
};

//MAP QUEST
const mapAPIKey = "wfAvATrJ0FOfJ0vTKskRjvLYXVZxVKAA";
//original directions url:
let mapQueryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapAPIKey}&location=2080202&thumbMaps=false`;
//This variable will be the fake user's zip (determined by compatibility?):
let fakeUserZip;
//Initializing user zip code:
let userZip;
let distance;

mapQueryUrl = `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userZip}&to=${fakeUserZip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`;

function horoscopeSetLocalStorage(userScope) {
  let savedScope = JSON.parse(localStorage.getItem("savedScope")) || [];
  savedScope.push(userScope);
  localStorage.setItem("savedScope", JSON.stringify(savedScope));
  userScope = savedScope[savedScope.length - 1];
}

function mapSetLocalStorage(userZip) {
  let savedZip = JSON.parse(localStorage.getItem("savedZip")) || [];
  savedZip.push(userZip);
  localStorage.setItem("savedZip", JSON.stringify(savedZip));
  userZip = savedZip[savedZip.length - 1];
}

//array of objects of all the fake users with their zip and jquery selector of where the distance will go
let allFakeUsers = [
  (fakeUser1 = {
    distanceText: $("#user0-distance"),
    zip: 20017,
  }),
  (fakeUser2 = {
    distanceText: $("#user1-distance"),
    zip: 20068,
  }),
  (fakeUser3 = {
    distanceText: $("#user2-distance"),
    zip: 20208,
  }),
  (fakeUser4 = {
    distanceText: $("#user3-distance"),
    zip: 20241,
  }),
  (fakeUser5 = {
    distanceText: $("#user4-distance"),
    zip: 20380,
  }),
  (fakeUser6 = {
    distanceText: $("#user5-distance"),
    zip: 20412,
  }),
  (fakeUser7 = {
    distanceText: $("#user6-distance"),
    zip: 20422,
  }),
  (fakeUser8 = {
    distanceText: $("#user7-distance"),
    zip: 20456,
  }),
  (fakeUser9 = {
    distanceText: $("#user8-distance"),
    zip: 20261,
  }),
  (fakeUser10 = {
    distanceText: $("#user9-distance"),
    zip: 20057,
  }),
  (fakeUser11 = {
    distanceText: $("#user10-distance"),
    zip: 20002,
  }),
  (fakeUser12 = {
    distanceText: $("#user11-distance"),
    zip: 20074,
  }),
  (fakeUser13 = {
    distanceText: $("#user12-distance"),
    zip: 20221,
  }),
  (fakeuser14 = {
    distanceText: $("#user13-distance"),
    zip: 20307,
  }),
  (fakeuser15 = {
    distanceText: $("#user14-distance"),
    zip: 20388,
  }),
  (fakeuser16 = {
    distanceText: $("#user15-distance"),
    zip: 20439,
  }),
  (fakeuser17 = {
    distanceText: $("#user16-distance"),
    zip: 20268,
  }),
  (fakeuser18 = {
    distanceText: $("#user17-distance"),
    zip: 20097,
  }),
  (fakeuser19 = {
    distanceText: $("#user18-distance"),
    zip: 20404,
  }),
  (fakeuser20 = {
    distanceText: $("#user19-distance"),
    zip: 20237,
  }),
  (fakeuser21 = {
    distanceText: $("#user20-distance"),
    zip: 20444,
  }),
  (fakeuser22 = {
    distanceText: $("#user21-distance"),
    zip: 20241,
  }),
  (fakeuser23 = {
    distanceText: $("#user22-distance"),
    zip: 20580,
  }),
  (fakeuser24 = {
    distanceText: $("#user23-distance"),
    zip: 20237,
  }),
  (fakeuser25 = {
    distanceText: $("#user24-distance"),
    zip: 20555,
  }),
];

findMatch = (goodMatch, allFakeUsers) => {
  for (let i = 0; i < allFakeUsers.length; i++) {
    fakeUserSign = $(`#fakeuser${i}`).attr("value");
    // console.log(fakeUserSign);
    if (goodMatch.includes(fakeUserSign)) {
      $(`#fakeuser${i}`).removeClass("hide"); //this just goes through and takes off hide class compatible fakeusers
    }
  }
};

compatibility = () => {
  switch (selectedSign) {
    case "aries":
      goodMatch = [
        "pisces",
        "aries",
        "leo",
        "sagittarius",
        "gemini",
        "libra",
        "aquarius",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "taurus":
      goodMatch = [
        "taurus",
        "virgo",
        "capricorn",
        "cancer",
        "scorpio",
        "pisces",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "gemini":
      goodMatch = ["aries", "leo", "gemini", "libra", "aquarius"];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "cancer":
      goodMatch = [
        "taurus",
        "virgo",
        "capricorn",
        "cancer",
        "scorpio",
        "pisces",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "leo":
      goodMatch = ["aries", "leo", "sagittarius", "gemini", "libra"];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "virgo":
      goodMatch = ["taurus", "virgo", "capricorn", "cancer", "scorpio"];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "libra":
      goodMatch = ["leo", "sagittarius", "gemini", "libra", "aquarius"];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "scorpio":
      goodMatch = [
        "taurus",
        "virgo",
        "capricorn",
        "cancer",
        "scorpio",
        "pisces",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "sagittarius":
      goodMatch = [
        "aries",
        "leo",
        "sagittarius",
        "gemini",
        "libra",
        "aquarius",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "capricorn":
      goodMatch = [
        "taurus",
        "virgo",
        "capricorn",
        "cancer",
        "scorpio",
        "pisces",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "aquarius":
      goodMatch = [
        "leo",
        "aries",
        "sagittarius",
        "gemini",
        "libra",
        "aquarius",
      ];
      findMatch(goodMatch, allFakeUsers);
      break;
    case "pisces":
      goodMatch = ["taurus", "capricorn", "cancer", "scorpio", "pisces"];
      findMatch(goodMatch, allFakeUsers);
      break;
    default:
      alert("Enter a sign");
      break;
  }
};

$(document).on("click", "#showHor", function () {
  userZip = $("#zipcodes :selected").val(); // The value of the selected option
  console.log(userZip);
  selectedSign = $("#birthday-input :selected").val();
  console.log(selectedSign);
  scopeURL = `https://aztro.sameerkumar.website?sign=${selectedSign}&day=today`;
  getScope();
  mapAjaxCall();
});

// Show Cards on Click
$("#showLovers").on("click", () => {
  $("#daily").addClass("hide");
  $("#users").removeClass("hide");
  compatibility(allFakeUsers);
});

$("#hideLovers").on("click", () => {
  $("#daily").removeClass("hide");
  $("#users").addClass("hide");
});

mapAjaxCall = () => {
  for (let i = 0; i < allFakeUsers.length; i++) {
    $.ajax({
      url: `https://www.mapquestapi.com/directions/v2/route?key=${mapAPIKey}&from=${userZip}&to=${allFakeUsers[i].zip}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`,
      method: "GET",
    })
      .then((response) => response.route.distance)
      .then((distance) => {
        allFakeUsers[i].distanceText.text(
          `This user is ${distance.toFixed(1)} miles away`
        );
      });
  }
};
