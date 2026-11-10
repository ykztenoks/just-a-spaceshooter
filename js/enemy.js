class Enemy {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen")
    this.element = document.createElement("div")
    this.x = 1400
    this.y = Math.floor(Math.random() * 590)
    this.width = 40
    this.height = 40
    this.image = "./assets/asteroid.png"

    this.element.style.position = "absolute"
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.top = `${this.y}px`
    this.element.style.left = `${this.x}px`
    this.element.style.backgroundImage = `url("${this.image}")`
    this.element.style.backgroundPosition = `center`
    this.element.style.backgroundSize = `cover`

    this.gameScreen.appendChild(this.element)
  }

  move() {
    this.x -= 5
    this.element.style.left = `${this.x}px`
  }
}
