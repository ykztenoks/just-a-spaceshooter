class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen")
    this.endScreen = document.querySelector(".end-screen")
    this.startScreen = document.querySelector(".start-screen")
    this.lifeContainer = document.querySelector(".life")
    this.player = null
    this.enemies = []
    this.enemyInterval = null
    this.animationInterval = null
    this.lives = 3
  }

  startGame() {
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.lifeContainer.textContent = this.lives
    this.player = new Player()

    this.enemyInterval = setInterval(() => {
      this.spawnEnemy()
    }, 2000)

    this.animationInterval = setInterval(() => {
      this.animate()
    }, 14)
  }

  animate() {
    this.enemies.forEach((enemy, i) => {
      if (enemy.x <= 0) {
        this.enemies.splice(i, 1)
        enemy.element.remove()
      }

      enemy.move()
      this.checkCollision(this.player, enemy, i)
    })
  }
  spawnEnemy() {
    if (this.enemies.length <= 5) this.enemies.push(new Enemy())
  }

  checkCollision(player, enemy, enemyIndex) {
    if (
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    ) {
      this.enemies.splice(enemyIndex, 1)
      enemy.element.remove()
      this.lives -= 1
      this.lifeContainer.textContent = this.lives

      if (this.lives <= 0) {
        clearInterval(this.enemyInterval)
        clearInterval(this.animationInterval)
        this.gameOver()
      }
    }
  }

  gameOver() {
    this.gameScreen.style.display = "none"
    this.endScreen.style.display = "flex"
  }
}
