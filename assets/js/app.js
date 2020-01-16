// Carousel
$(document).ready(function(){
  $('.carousel').carousel();

   //ajax call for horoscope
   let scopeURL= "http://aztro.sameerkumar.website";
   let scopeApiKey = "db33035934mshd1b34ca9cd0fe88p1ebc13jsnd29e5614fd22"

   function getScope () {
      $.ajax({
         type:'POST',
         url: scopeURL,
         json: 'true',
         dataType:"jsonp",
         data: {
            // q: "aries",
            appid: scopeApiKey
         }
      }).then(function(response) {
         console.log(response);
         horoURL = "http://sameer-kumar-aztro-v1.p.rapidapi.com/?sign={sign}&day={day}";
         $.ajax({
            url: horoURL,
            method: "POST",
            data: {
               appid: scopeApiKey
            }
         }).then(function (response) {
            console.log(response);
         });
      });
   };
   getScope();
});
