let squares = []
let squareWin = []
let currentPlayer = "X"
let numPlays = 0
let playerX = ""
let playerO = ""

const nameX = document.querySelector(".nameX")
const nameO = document.querySelector(".nameO")

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

document.getElementById("playerX").addEventListener("blur", function () {
  const selectPlayerX = document.getElementById("playerX")
  playerX = selectPlayerX.value
  nameX.querySelector("p").innerText = playerX
})

document.getElementById("playerO").addEventListener("blur", function () {
  const selectPlayerO = document.getElementById("playerO")
  playerO = selectPlayerO.value
  nameO.querySelector("p").innerText = playerO
})

document.querySelectorAll(".square").forEach(function (element) {
  element.addEventListener("click", function () {
    if (playerO == "" && playerX == "") {
      return alert(
        "Não pode começar sem selecionar escrever o nome do jogador antes"
      )
    }

    if (element.textContent !== "") {
      return alert("Não pode selecionado um campo que já foi preenchido")
    }

    element.textContent = currentPlayer
    squares[element.dataset.square] = currentPlayer
    numPlays += 1

    if (winningGame()) {
      
      if (currentPlayer == "X") {
        alert(`O ganhador partida foi o ${playerX} `)
      } else {
        alert(`O ganhador da partida foi o ${playerO}`)
      }
      resetGame()
      return
    }

    if (numPlays === 9) {
      resetGame()
      return alert("Empate !")
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"
    changePlayer()
  })
})

function winningGame() {
  return winningCombos.some((combo) => {
    return combo.every((squareIndex) => {
      return squares[squareIndex] === currentPlayer
    })
  }) 

}

function changePlayer() {
  nameX.classList.toggle("selected")
  nameO.classList.toggle("selected")
}

function resetGame() {
  numPlays = 0
  currentPlayer = "X"
  squares = []
  playerO = ''
  playerX = ''
  document.querySelectorAll(".square").forEach((square) => {
    square.textContent = ""
  })
  changePlayer()
}

