let randomno = parseInt(Math.random()*100+1)
const submit= document.querySelector('.sub');
const userInput = document.querySelector('.guessinput');
const guessslot = document.querySelector('.pguess');
const remaining = document.querySelector('.lastResult');
const lowhi = document.querySelector('.lowHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a  number greater than 1')
    }else if(guess>100){
        alert('please enter a  number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMassage(`game over . random number was ${randomno}`)
        }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){
if(guess === randomno){
    displayMassage('your guess is right')
    endgame()

}
else if(guess<randomno){
    displayMassage('number is too low')
}
else if(guess>randomno){
    displayMassage('number is too high')
}
}
function displayGuess(guess) {
    userInput.value = ''
    guessslot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMassage(massage){
lowhi.innerHTML = ` <h2> ${massage}</h2>`
}

function endgame(){
 userInput.value = ''
 userInput.setAttribute('disabled', '')
// p.classList.add('button');
// p.innerHTML='<h2 id="new>Start new game</h2>'
 startOver.appendChild(p)
 playGame = false
 newgame()
}
function newgame(){
const gameButton = document.getElementById('new')
gameButton.addEventListener('click',function(e){
    randomno = parseInt(Math.random()*100+1)
    prevGuess = []
    guessslot.innerHTML = ''
    remaining.innerHTML = []
    numGuess=1
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
})
}
