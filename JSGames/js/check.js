let guessCount;
let limit; //Obergrenze
let randomNumber; //RandomNumber
let count; //Try Count
let win = false;
let correctInput = false;

function setUpperLimit() {
    limit = parseInt(document.getElementById('upperLimit').value);    
}

function setRndNumber() {
    setUpperLimit();
    randomNumber = Math.floor(Math.random() * limit + 1);  
}

function setCount() {
    count = parseInt(document.getElementById('count').value);   
}

function changeScreen() {  
    checkInput();
    if (correctInput = true){
        setRndNumber(); 
        
        count = document.getElementById('count').value;
        let curScreen = document.getElementById('screen1');
        curScreen.classList.remove('active');
        curScreen = document.getElementById('screen2');
        curScreen.classList.add('active');
    } else {
        createPopUp("Please enter a number > 0");
    }
}

function start() {

    let output = document.getElementById('outputText');
    let input = document.getElementById('inputNumber').value;
  
    if (input == randomNumber) {
        win = true;
        output.innerHTML = `${input} was correct!`
        setTimeout(function () {
            createPopUp(`${input} was correct!`, true);
        }, 1000)
    } else if (input < randomNumber && count != 0) {
        output.innerHTML = `${input} was too low! Please try again!`
    } else if (input > randomNumber && count != 0) {
        output.innerHTML = `${input} was too high! Please try again!`
    }       
    count--;

    if (count == 0 && !win) {
        output.innerHTML = `${input} was wrong!`
        setTimeout(function () {
            createPopUp(`${input} was wrong! You lose!`, true);
        }, 1000)
    }
}

function checkInput() {
    limit = parseInt(document.getElementById('upperLimit').value); 
    count = parseInt(document.getElementById('count').value); 
    if (count <= 0 || limit <= 0) {
        //Fehlermeldung
        createPopUp("Please enter a number > 0");
    } else {
        correctInput = true;
    }
}







