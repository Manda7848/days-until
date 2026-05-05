window.onload = () => { 
    
    var Dday = new Date("Jun 19, 2026 12:30:00").getTime();


var x = setInterval(function() {

 var now = new Date().getTime();
 console.log(now);

 var dist = Dday - now;


 var days = Math.floor(dist / (1000 * 60 * 60 * 24));
 var hours = Math.floor((dist % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));

 var mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
 var secs = Math.floor((dist % (1000 * 60)) / 1000)
document.getElementById("countdown").textContent = days + " Days, "  + hours + " Hours, " + mins + " Minutes & " + secs + " Seconds"



// IT IS OVER

if (dist < 0) {
clearInterval(x);
document.getElementById("countdown").textContent = "Congratulations, you are done with High School!";
document.getElementById("time").textContent = "";
function celebrate() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 90,
            origin: { x: 0 },
            colors: ['#B4E2FD', '#ffffff', '#AECDEB']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#B4E2FD', '#ffffff', '#AECDEB']
        });

        requestAnimationFrame(celebrate); 
    }

    celebrate();
}




},1000);


//INSTANT CELEBRATION BELOW



// function celebrate() {
//         confetti({
//             particleCount: 2,
//             angle:60,
//             spread: 90,
//             origin: { x: 0 },
//             colors: ['#B4E2FD', '#ffffff', '#AECDEB']
//         });
//         confetti({
//             particleCount: 2,
//             angle: 120,
//             spread: 55,
//             origin: { x: 1 },
//             colors: ['#B4E2FD', '#ffffff', '#AECDEB']
//         });

//         requestAnimationFrame(celebrate); 
//     }

// celebrate();

}