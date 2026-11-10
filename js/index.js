const startScreen = document.querySelector(".start-screen")
const gameScreen = document.querySelector(".game-screen")
const endScreen = document.querySelector(".end-screen")
const startBtn = document.querySelector(".start-btn")

let game

window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    game = new Game()
    game.startGame()
  })

  document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key === "ArrowUp") {
      game.player.moveUp()
    }
    if (e.key === "ArrowDown") {
      game.player.moveDown()
    }
  })
})
