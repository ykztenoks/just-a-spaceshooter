class Player {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen")
    this.element = document.createElement("div")
    this.x = 0
    this.y = 50
    this.width = 70
    this.height = 70
    this.image = "./assets/spaceship.png"

    this.element.style.position = "absolute"
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.top = `${this.y}px`
    this.element.style.left = `${this.x}px`
    this.element.style.backgroundImage = `url("${this.image}")`
    this.element.style.backgroundPosition = `center`
    this.element.style.backgroundSize = `cover`
    this.element.style.rotate = "90deg"

    this.gameScreen.appendChild(this.element)
  }

  moveUp() {
    if (this.y >= 10) {
      this.y -= 7
      this.element.style.top = `${this.y}px`
    }
  }

  moveDown() {
    if (this.y <= 575) {
      this.y += 7
      this.element.style.top = `${this.y}px`
    }
  }
}
