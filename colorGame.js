let numSquares = 6
let colors = generateRandomColors(numSquares) //

let message = document.getElementById('message')
let squares = document.querySelectorAll('.square')
let pickedColor = randomColor()
let colorDisplay = document.getElementById('colorDisplay')
let h1 = document.querySelector('h1')
let resetGame = document.getElementById('newColorsButton')

let easyBtn = document.querySelector("#easyBtn")
let hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", ()=> {
    
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numSquares = 3
    colors = generateRandomColors(numSquares)
    pickedColor = randomColor()
    colorDisplay.textContent = pickedColor
    h1.style.backgroundColor = 'steelblue'

    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) squares[i].style.background = colors[i]
        else squares[i].style.display = 'none'
    }
})

hardBtn.addEventListener("click", () => {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numSquares = 6
    colors = generateRandomColors(numSquares)
    pickedColor = randomColor()
    colorDisplay.textContent = pickedColor
    h1.style.backgroundColor = 'steelblue'

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        squares[i].style.display = 'block'
    }
})

resetGame.addEventListener("click", ()=> {
    colors = generateRandomColors(numSquares) //
    pickedColor = randomColor()
    colorDisplay.textContent = pickedColor
    resetGame.textContent = "New Colors"
    message.textContent = ""
    h1.style.backgroundColor = 'steelblue'

    for (let i = 0; i < squares.length; i++) { //REFACTOR DRY
        let ele = squares[i]

        ele.style.backgroundColor = colors[i]
    }
})

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    let ele = squares[i]

    ele.style.backgroundColor = colors[i]
    
    ele.addEventListener('click', ()=> {
        
       let clickedColor = ele.style.backgroundColor
       
       if(clickedColor === pickedColor) {
           message.innerText = "CORRECT!"
           resetGame.innerText = "Play Again?"
           changeColors(clickedColor)
           h1.style.backgroundColor = pickedColor

       } else { 
           ele.style.backgroundColor = 'rgb(10, 27, 41)'
       }
    })
}

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