class Game {
  constructor() {
    this.gameOver = false;
    this.ballsClicked = 0;
    this.balls = [];
    this.interval = 2;
  }

  update() {
    // set speed
    if (frameCount % (game.interval * 30) == 0) {
      let ball = new Ball(random(width), this.ballWidth, this.gameSpeed);
      this.balls.push(ball);
    }

    // check for game over
    for (let i = 0; i < this.balls.length; i++) {
      let b = this.balls[i];

      if (!this.gameOver) {
        b.drop();
        b.draw();
      }

      if (b.y >= height) {
        this.gameOver = true;
      }
    }
  }

  get gameSpeed() {
    if (this.ballsClicked < 5) {
      return 2;
    }
    if (this.ballsClicked < 10) {
      return 3;
    }
    if (this.ballsClicked < 20) {
      return 5;
    }
  }

  get ballWidth() {
    if (this.ballsClicked < 5) {
      return 30;
    }
    if (this.ballsClicked < 10) {
      return 20;
    }
    if (this.ballsClicked < 20) {
      return 15;
    }
  }

  draw() {
    stroke('black');
    fill('black');
    textAlign(LEFT);
    text(`score: ${this.ballsClicked}`, 10, 10);

    if (this.gameOver) {
      textAlign(CENTER);
      text(`GAME OVER! You clicked ${this.ballsClicked} balls!`, width/2, height/2);
    }
  }
}
