var ball = document.getElementById("ball") ;

var rod1 = document.getElementById("rod1") ;

var rod2 = document.getElementById("rod2") ;

const storeName = "PPName"
const storeScore = "PPMaxScore"
const rod1Name = "Rod 1"
const rod2Name = "Rod 2"

let score, maxScore, movement, rod, ballSpeedX=2, ballSpeedY=2

let gameOn = false

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

(function() {

}) () ;

function resetBoard( ) {

}

function storeWin() {

}

window.addEventListener('keypress', function() {
    let rodSpeed  = 20
    let rodRect = rod1.getBoundingClientRect()
    if(event.code === "KeyD" && ((rodRect.x+rodRect.width)<window.innerWidth)){
    rod1.style.left = rodRect.x + rodSpeed + 'px'
    rod2.style.left = rod1.style.left
}
else if (event.code === 'KeyA' && (rodRect.x>0)) {
    rod1.style.left = rodRect.x - rodSpeed + 'px'
    rod2.style.left = rod1.style.left

}
if (this.event.code)

})

/* 
var ball = document.getElementById('ball');
var rod1 = document.getElementById('rod1');
var rod2 = document.getElementById('rod2');

const storeName = "PPName";
const storeScore = "PPMaxScore";
const rod1Name = "Rod 1";
const rod2Name = "Rod 2";

let score, maxScore, movement, rod, ballSpeedX = 2, ballSpeedY = 2;

let gameOn = false;

let windowwidth = window.innerWidth;
let windowHeigh = window.innerHeight;

(function () {


})();
function resetBoard() {

}

function storeWin() {

}

window.add