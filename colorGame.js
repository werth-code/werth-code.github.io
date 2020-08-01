let numSquares = 6
let colors = []
let pickedColor;

let message = document.getElementById('message')
let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let h1 = document.querySelector('h1')
let resetGame = document.getElementById('newColorsButton')
let modeButton = document.querySelectorAll(".mode")

init()

function init() {
    setUpModeButtons()
    setUpSquares()
    reset()
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    let ele = squares[i]
    ele.style.backgroundColor = colors[i]

    ele.addEventListener('click', () => {
        let clickedColor = ele.style.backgroundColor
        
        if (clickedColor === pickedColor) {
            message.innerText = "YES!"
            resetGame.innerText = "Play Again?"
            changeColors(clickedColor)
            h1.style.backgroundColor = pickedColor
        } 
        else ele.style.backgroundColor = 'rgb(10, 27, 41)'
    })
  }
}

function setUpModeButtons() {

  for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", () => {
        modeButton[0].classList.remove("selected")
        modeButton[1].classList.remove("selected")
        modeButton[i].classList.add("selected")
        modeButton[i].textContent === "Easy" ? numSquares = 3 : numSquares = 6
        reset()
    })
  }
}

function reset() {
    colors = generateRandomColors(numSquares) //
    pickedColor = randomColor()
    colorDisplay.textContent = pickedColor
    resetGame.textContent = "New Colors"
    message.textContent = ""
    h1.style.backgroundColor = 'steelblue'

    for (let i = 0; i < squares.length; i++) { //REFACTOR DRY
        let ele = squares[i]
        
        if(colors[i]) { 
            ele.style.display = "block"
            ele.style.backgroundColor = colors[i]
        } else ele.style.display = "none"

        ele.style.backgroundColor = colors[i]
    }
}

resetGame.addEventListener("click", ()=> {
    reset()
})

function changeColors(color) {
    for(let i = 0; i < squares.length; i++) {
        let current = squares[i]
        current.style.backgroundColor = color
    }
}

function randomColor() {
    let number = Math.floor(Math.random() * colors.length)
    return colors[number]
}

function rgbColorGen() {
   return Math.floor(Math.random() * 256)
}

function generateRandomColors(num) {
    let randomArr = []
    for(let i = 0; i < num; i++) {
        let newColor = `rgb(${rgbColorGen()}, ${rgbColorGen()}, ${rgbColorGen()})`
        randomArr.push(newColor)
    }
    return randomArr
}