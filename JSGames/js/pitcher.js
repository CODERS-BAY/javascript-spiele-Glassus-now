let fallingSpeed;
let speed;
let position = 1;
let angle;
let throwingDistance;
let distanceToCatcher;


function setCatcherDistance() {
    distanceToCatcher = Math.random() * 90 + 10;
    distanceToCatcher = Math.round(distanceToCatcher);
    catcherPosition.innerHTML = `Your catcher is ${distanceToCatcher}meter away from you`
}

// function setThrowingDistance() {
//     speed = document.getElementById('speedValue').value;
//     angle = document.getElementById('angleValue').value;
//     throwingDistance = Math.round(((speed * speed) * Math.sin(2 * angle)) / fallingSpeed);
// }

function start() {
    // setThrowingDistance();
    speed = document.getElementById('speedValue').value;
    angle = document.getElementById('angleValue').value * (Math.PI / 180);
    throwingDistance = Math.round(((speed * speed) * Math.sin(2 * angle)) / fallingSpeed);

    let differenz = Math.abs(throwingDistance - distanceToCatcher);

    if (differenz < 10) {
        setTimeout(function () {
            createPopUp("Your throw was perfect!", true);
        }, 1000)
    } else {
        output.innerHTML = `You threw ${throwingDistance} meter`
    }
}

function getToEarth() {
    fallingSpeed = 9.81;
    gamePanel.style.backgroundImage = "url(image/StadiumEarth.jpg)";
    setCatcherDistance();  
}

function getToMoon() {
    fallingSpeed = 1.62;
    gamePanel.style.backgroundImage = "url(image/StadiumMoon.jpg)";
    setCatcherDistance();  
}

function getToMars() {
    fallingSpeed = 3.69;
    gamePanel.style.backgroundImage = "url(image/StadiumMars.jpg)";
    setCatcherDistance();   
}

function getToJupiter() {
    fallingSpeed = 24.79;
    gamePanel.style.backgroundImage = "url(image/StadiumJupiter.jpg)";
    setCatcherDistance();
}

