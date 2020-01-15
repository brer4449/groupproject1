// Carousel
$(document).ready(function(){
  $('.carousel').carousel();

//ajax call for horoscope
let scopeURL= "https://aztro.sameerkumar.website";
let scopeApiKey = "db33035934mshd1b34ca9cd0fe88p1ebc13jsnd29e5614fd22"

var horoLookup = function(sign){
   
   var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today",
      "method": "POST",
      "headers": {
         "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
         "x-rapidapi-key": "c021d222dbmsh6ab2abfc16228eap1bb001jsnd8212c972aee",
         "content-type": "application/x-www-form-urlencoded"
      },
      "data": {}
   }
   
   $.ajax(settings).done(function (response) {
      console.log(response);
   });
   $.ajax({
     url: scopeURL,
     method: "GET",
     data: {
       t: sign,
       apikey: scopeApiKey
     }

   //   req.query({
   //    sign: "aries",
   //    day: "today"
   // })
   }).then(function(response) {
     console.log(response);
   });

   // https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign={sign}&day={day}

   api_url = "https://aztro.sameerkumar.website/?sign="+sign+"&day="+day
   new Vue({
    el: '#aztro',
    
    data() {
            return {
            data: {}
        }
    },
    created() {
        axios.post(URL).then((response) => {
            this.data = response.data
        })
    }
})
   
}
horoLookup();
});


$(showLovers).on("click", function() {
  $("#weHere").removeClass("hide");
})
