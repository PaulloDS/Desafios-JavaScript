
let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function newGame() {
    window.location.reload()
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é muito alto'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
          }
          else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é baixo'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
          }
          else {
            document.getElementById('textOutput').innerHTML = 'Na lata!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
          }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu! O número do computador era: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
    if (userNumber < 1) {
      document.getElementById('textOutput').innerHTML = 'O número deve ser maior que 0'
    }
    else if (userNumber > 100) {
      document.getElementById('textOutput').innerHTML = 'O número deve ser menor que 100'
    }
}