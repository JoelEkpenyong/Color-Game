var mode = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var span = document.querySelector("#color");
var message = document.querySelector("#display")
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset")
var easy = document.getElementsByTagName("button")[1]
var hard = document.getElementsByTagName("button")[2]
var extra = document.querySelectorAll(".extra")


init();

function init(){
    setupSquares();
    functionButtons();
    reset();
}

function functionButtons(){
    easy.addEventListener("click", easyMode);
    hard.addEventListener("click", hardMode);
    resetBtn.addEventListener("click", reset);
}

function setupSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click", validate);
    }
}

function validate(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor
        resetBtn.textContent = "Play Again?"
    } else{
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
    }
}

function changeColors (color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function reset(){
    colors = randomColorGenerator(mode)
    pickedColor = pickColor()
    span.textContent = pickedColor
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue"
    message.textContent = null
    this.textContent = "New Colors"
}

function pickColor (){
    var number = Math.floor(Math.random() * mode);
    return colors[number];
};

function randomColorGenerator (num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function easyMode(){
    this.classList.add("selected")
    hard.classList.remove("selected")
    mode = 6
    for(var i = 0; i < extra.length; i++){
        extra[i].classList.add("easyMode")
    }
    reset()  
}

function hardMode (){
    this.classList.add("selected")
    easy.classList.remove("selected")
    mode = 9
    for(var i = 0; i < extra.length; i++){
        extra[i].classList.remove("easyMode")
    }
    reset()
}


