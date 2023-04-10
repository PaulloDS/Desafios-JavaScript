
const colors = ['Red', 'Yellow', 'Purple', 'Green', 'Blue']
const btn = document.getElementById('btn')
const colorWeb = document.querySelector('.color')


btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    colorWeb.textContent = colors[randomColor]
})


function getRandomColor () {
    return Math.round(Math.random() * colors.length)   
}