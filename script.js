var Dday = new Date("Jun 19, 2026 12:30:00").getTime();


var x = setInterval(function() {

 var now = new Date().getTime();
 console.log(now);

 var dist = Dday - now;


 var days = Math.floor(dist / (1000 * 60 * 60 * 24));
 var hours = Math.floor((dist % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));

 var mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
 
document.getElementById("countdown").textContent = days + " Days, "  + hours + " Hours & " + mins + " Minutes"



// IT IS OVER

if (dist < 0) {
clearInterval(x);
document.getElementById("countdown").textContent = "Congratulations, you are done with High School!"

}

},1000);