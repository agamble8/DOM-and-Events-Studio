// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let landButton = null;
let abortButton = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;
let flightStatus = null;
let shuttleHeight = null;
let backgroundCol = null;
let rocket = null;
let movement = null;

function init () {
    takeoffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    leftButton = document.getElementById("left");
    rightButton = document.getElementById("right");
    abortButton = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    backgroundCol = document.getElementById("shuttleBackground");
    rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";


    takeoffButton.addEventListener('click', function() {
        let result = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if(result){
            flightStatus.innerHTML = 'Shuttle in flight.';
            backgroundCol.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
        }
    })

    landButton.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        backgroundCol.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
        rocket.style.left = "0px";
        rocket.style.bottom = "0px";
    })

    abortButton.addEventListener('click', function() {
        let result = window.confirm('Confirm that you want to abort the mission.');
        if(result){
            flightStatus.innerHTML = 'Mission aborted.';
            backgroundCol.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
            rocket.style.left = "0px";
            rocket.style.bottom = "0px";
        }
    })

    leftButton.addEventListener('click', function() {
        if (parseInt(rocket.style.left) > -20) {
            movement = parseInt(rocket.style.left) - 10 + 'px';
            rocket.style.left = movement;
        }
    })

    rightButton.addEventListener('click', function() {
        let maxWidth = (backgroundCol.clientWidth - 60);    
        if (parseInt(rocket.style.left) < maxWidth) {
            movement = parseInt(rocket.style.left) + 10 + 'px';
            rocket.style.left = movement; 
        }
    })

    downButton.addEventListener('click', function () {
        if (shuttleHeight.innerHTML > 0) {
            movement = parseInt(rocket.style.bottom) - 10 + 'px';
            rocket.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });
    
    upButton.addEventListener('click', function () {
        if (shuttleHeight.innerHTML < 250000){
            movement = parseInt(rocket.style.bottom) + 10 + 'px';
            rocket.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });
    
}

 window.onload = init;

//  let down = this.document.getElementById('down');
//     down.addEventListener("click", function () {
//         movement = parseInt(imgObj.style.bottom) - 10 + 'px';
//         imgObj.style.bottom = movement;
//         shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
//     });
