const form = document.querySelector('form')
const submitBtn = document.querySelector('#sumbitBtn')
const userInput = document.querySelector('#userInput')
const victory = document.querySelector('#victory')

const randomNumber = parseInt(Math.random() * 100 + 1)
const game = true

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(randomNumber)
    inputValidate(userInput.value)
})

function inputValidate(userInputs){
    if(userInputs === ''){
        alert('Please enter a number')
    } else if(userInputs <= 0){
        alert('Please enter a number greaterthan 0')
    } else if(userInputs > 100){
        alert('Please enter a number lessthan 100')
    } else if(isNaN(userInputs)){
        alert('Please enter a valid number')
    } else{
        userInputMatch(userInputs)
    }
}

function userInputMatch(userGuesses){
    if(userGuesses === randomNumber){
        console.log(`You won this game!`)
    } else{
        console.log(userGuesses)
    }
}