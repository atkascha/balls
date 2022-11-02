/*

A cheesy little ball drop game.
Click the balls before they hit the ground.
The more you click, the faster and small the balls will become.

Good luck!

*/

const game = new Game();

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);

  game.update();

  game.draw();
}

function mouseClicked() {
  for (let i = 0; i < game.balls.length; i++) {
    if (game.balls[i].isClicked()) {
      game.balls.splice(i, 1);
      game.ballsClicked++;
    }
  }
}
