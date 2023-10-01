let randomNo = Math.floor(Math.random()*100 +1)
const submitBtn = document.querySelector('button')
const inputNo = document.querySelector('input')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh  = document.querySelector('.lowOrhigh')
const startOver = document.querySelector('.resultParameters')

const p = document.createElement('p')

let guessArr = []
let numGuess = 1

let playGame = true;


if(playGame)
{
    console.log(randomNo)
    submitBtn.addEventListener('click', function(){
    const guess = parseInt(inputNo.value)
    console.log(guess)
    validateGuess(guess)


    })
}


function validateGuess(inputNo)
{
    if(isNaN(inputNo) ||inputNo<1 ||inputNo>100)
    {
        alert('Please enter a correct no')
    }
    else{
        guessArr.push(inputNo)
        if(numGuess >10)
        {
            displayGuess(inputNo)
            displayMessage(`GAME OVER. The no was ${randomNo}`)
            endGame()
        }
        else{
            displayGuess(inputNo)
            checkGuess(inputNo)
        }
    }
}

function checkGuess(guess)
{
    //to check if equal to random no
    if(guess ===randomNo)
    {
        displayMessage('You Won, you guessed it correct')
        endGame()
    }
    else
    if(guess < randomNo)
    {
        displayMessage('The no is greater than your no')
    }
    else
    {
        displayMessage('The no is smaller than your no')
    }
    
}
function displayGuess(guess)
{
    inputNo.value = ''
    guessSlot.innerHTML +=` ${guess}`
    numGuess++
    lastResult.innerHTML = `${11-numGuess}`
}

function displayMessage(message)
{
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame()
{
    inputNo.value = ''
    inputNo.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game<h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNo = Math.floor(Math.random()*100 +1)
        guessArr = []
        numGuess = 1
        guessSlot.innerHTML=''
        lastResult.innerHTML = `${11-numGuess}`
        inputNo.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
        
    })
}






