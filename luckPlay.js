//Dom Selection
const formElm = document.querySelector('form')
const winScoreElm = document.querySelector('.lucky-number span')
const p1ScoreElm = document.querySelector('.p1')
const p2ScoreElm = document.querySelector('.p2')
const inputElm = document.querySelector('.luck-input')
const p1BtnElm = document.querySelector('.p1Btn')
const p2BtnElm = document.querySelector('.p2Btn')
const resetBtnElm = document.querySelector('.resetBtn')
const winPlayerElm = document.querySelector('.winner')


let p1Score = 0
let p2Score = 0
let p1Turn = true
let p2turn = false
let winScore = 10
let isGameOver = false

function initialDom(){
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    winScoreElm.textContent = winScore

    if(!p1Turn){
        p1BtnElm.setAttribute('desabled', 'disabled')
    }
    if(!p2turn){
        p2BtnElm.setAttribute('disabled', 'disabled')
    }
}

initialDom()

function validationinput(inputVal){
    isInValid = false
    if(!inputVal || inputVal !== inputVal){
        alert('Please fill input or provide Valid Input')
        // inputElm.value =""
        isInValid = true
    }
    return isInValid
}

function resetInput(){
    inputElm.value =""
}

formElm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const inputVal = Number(inputElm.value)

    // input Validation part
        const isInValid = validationinput(inputVal)

        if(isInValid) return

    resetInput()

    winScore = inputVal

    winScoreElm.textContent = inputVal
    console.log(inputVal)
})


p1BtnElm.addEventListener('click', (evt) =>{
    if(p1Turn){
        p1Score+=Math.floor(Math.random() * (winScore/2))
        p1ScoreElm.textContent = p1Score
    }
    p1Turn = false
    p1BtnElm.setAttribute('disabled','disabled')
    p2turn = true
    p2BtnElm.removeAttribute('disabled')
    if(p1Score === winScore){
        isGameOver = true
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')
        winPlayerElm.textContent = 'Player 1 is Winner'
        p1ScoreElm.textContent = 0
        p2ScoreElm.textContent = 0
       
    }

})

p2BtnElm.addEventListener('click', (evt) =>{
if(p2turn){
    p2Score+=Math.floor(Math.random() * (winScore/2))
    p2ScoreElm.textContent = p2Score
}
    p2turn = false
    p2BtnElm.setAttribute('disabled','disabled')
    p1Turn = true
    p1BtnElm.removeAttribute('disabled')
    if(p2Score === winScore){
        isGameOver = true
      
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')
        winPlayerElm.textContent = 'Player 2 is Winner'
        p1ScoreElm.textContent = 0
        p2ScoreElm.textContent = 0
        
    }

})