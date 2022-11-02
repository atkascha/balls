class Ball {
  constructor(x, width, speed) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.speed = speed;
    this.fill = this.randomColor;
  }

  get randomColor() {
    let r = random(255);
    let g = random(255);
    let b = random(255);

    return color(r, g, b);
  }

  drop() {
    this.y += this.speed;
  }

  isClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.width / 2) {
      return true;
    }

    return false;
  }

  draw() {
    stroke("black");
    fill(this.fill);
    ellipse(this.x, this.y, this.width);
  }
}
