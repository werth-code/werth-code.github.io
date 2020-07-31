let colors = generateRandomColors(6) //

const message = document.getElementById('message')
const squares = document.querySelectorAll('.square')
const pickedColor = randomColor()
const colorDisplay = document.getElementById('colorDisplay')

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    let ele = squares[i]

    ele.style.backgroundColor = colors[i]
    
    ele.addEventListener('click', ()=> {
       //grab color of picked square 
       let clickedColor = ele.style.backgroundColor
       //compare to color of pickedColor
       if(clickedColor === pickedColor) {
           message.innerText = "CORRECT!"
           changeColors(clickedColor)

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
   return Math.floor(Math.random() * 255)
}

function generateRandomColors(num) {
    let randomArr = []
    for(let i = 0; i < num; i++) {
        let newColor = `rgb(${rgbColorGen()}, ${rgbColorGen()}, ${rgbColorGen()})`
        randomArr.push(newColor)
    }
    return randomArr
}