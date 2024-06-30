const randomNumber=Math.round(Math.random()*100+1);
const submit=document.querySelector('#guessField');
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".latResult");
const userInput=document.querySelector(guessField).value;
const LowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;
let playGame = true;

if(playGgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
        
    })
}

function validateGuess(guess){

}
function checkGuess(guess){

}

function displayGuess(guess){

}
function displayMessage(message){

}
function newGame(){

}
function endGame(){

}

