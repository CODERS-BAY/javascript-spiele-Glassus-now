var pc;
var player;
var count;
var input;
var over;
var outPut = document.getElementById('outPut');
var bigOutPut = document.getElementById('bigOutPut');
newGame();

function newGame() {
    over = false;
    player = [0, 0, 0];
    pc = [(Math.floor(Math.random() * 9) + 1), 
            (Math.floor(Math.random() * 9) + 1), 
            (Math.floor(Math.random() * 9) + 1)]
    
    count = 1;
    outPut.innerHTML = " ";   
}

function submit() {
    if (over) {
        return;
    }

    correct = 0;
    player = [parseInt(document.getElementById('first').value), 
            parseInt(document.getElementById('second').value), 
            parseInt(document.getElementById('third').value)];

    for(i = 0; i < pc.length; i++){
        let numb = player[i]
        if (player[i] === pc[i]){
            correct++;
            outPut.innerHTML += "<span class='green'>" + numb + "</span>"          
        } else if (pc.includes(numb)) {
            outPut.innerHTML += "<span class='yellow'>" + numb + "</span>" 
        } else {
            outPut.innerHTML += "<span class='red'>" + numb + "</span>"
        }     
    }
    outPut.innerHTML += " " + " - "
    
    console.log(correct);
    count++;
    if(correct == 3) {
        outPut.innerHTML = "<span class='green'>You Win!</span>";
        over = true;
    }
    if(count > 12 && !over) {
        outPut.innerHTML = "<span class='red'>You Lose!</span>";
        over = true;
    }
    

}