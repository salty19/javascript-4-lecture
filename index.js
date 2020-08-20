console.log('I am working')

const headerText = document.querySelector(".title")

headerText.innerText = "Scott Loves Fish Tanks"

headerText.style = "color: red; text-decoration: underline;"

headerText.style.fontSize = '16px' 

console.log(headerText.classList)

headerText.classList.add("dark-mode")

// const dynamicDiv = document.getElementById('dynamic-div')

// dynamicDiv.innerHTML = `
//     <ul>
//         <li>One</li>
//         <li>Two</li>
//         <li>Three</li>
//     </ul>
// `

const storyHold = document.querySelector(".story-hold")

cont storyButton = document.getElementById("story-button")

function changeColor(e){
    e.preventDefault()
    console.log('i got click')
}

storyButton.addEventListener('click', changeColor)

const content = document.querySelector('.content-hold')
const colorInput = document.getElementById('color-input')

content.style