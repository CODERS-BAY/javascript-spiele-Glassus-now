let intervalCount = 0;
setInterval(switchColor, 500);

function switchColor() {
    let spans = document.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        let item = spans[i];

        if (intervalCount % 2 == 0) {
            (i % 2 == 0) ? item.classList.add('highlight') : item.classList.remove('highlight');
        } else {
            (i % 2 != 0) ? item.classList.add('highlight') : item.classList.remove('highlight');
        }
    }
    intervalCount++;
}

let counter;
let userPoint = 0;
let pcPoint = 0;

function readCounter() {
    counter = counterInput.value;
    if (counter <= 0) {
        //Fehlermeldung
        createPopUp("Geben sie eine Zahl > 0 ein");

    } else {
        let activeDiv = document.getElementsByClassName('active')[0];
        activeDiv.classList.remove('active');
        activeDiv.nextElementSibling.classList.add('active');
    }
}

function play(userChoice) {
    let pcChoice = Math.ceil(Math.random() * 3);
    userImage.setAttribute('src', 'image/rockPaperScissor' + userChoice + '.jpg');
    pcImage.setAttribute('src', 'image/rockPaperScissor' + pcChoice + '.jpg');

    if (userChoice == 1){
        if(pcChoice == 2){
            userPoint++;
            resultImage.setAttribute('src', 'image/you-win.jpg');
        } else if (pcChoice == 3) {
            pcPoint++;
            resultImage.setAttribute('src', 'image/you-lose.jpg');
        } else {
            resultImage.setAttribute('src', 'image/dice.png');
            userPoint++;
            pcPoint++;
        }
    } else if (userChoice == 2) {
        if(pcChoice == 1){
            pcPoint++;
            resultImage.setAttribute('src', 'image/you-lose.jpg');
        } else if (pcChoice == 3){
            userPoint++;
            resultImage.setAttribute('src', 'image/you-win.jpg');
        } else {
            resultImage.setAttribute('src', 'image/dice.png');
            userPoint++;
            pcPoint++;
        }
    } else {
        if (pcChoice == 1){
            userPoint++;
            resultImage.setAttribute('src', 'image/you-win.jpg');
        } else if (pcChoice == 2){
            pcPoint++;
            resultImage.setAttribute('src', 'image/you-lose.jpg');
        } else {
            resultImage.setAttribute('src', 'image/dice.png');
            userPoint++;
            pcPoint++;
        }
    }
    counter--;


    if (counter == 0) {
        setTimeout(function () {
            if (userPoint > pcPoint) {
                createPopUp("You Win!", true);
            } else if (userPoint == pcPoint) {
                createPopUp("DRAW!", true);
            } else {
                createPopUp("You Lose!", true);
            }
        }, 1000)
    }
}