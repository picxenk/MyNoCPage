class Walker {
  
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.c = random(['aqua', 'aquamarine', 'beige', 'coral', 'fuchsia', 'gold']);
  	this.w = random(3, 50);
  }
  
  move() {
    // 새로운 속도 만들기
    // this.vel = createVector(random..., random..)
    this.vel = p5.Vector.random2D().mult(7);
    
    
    // 새 위치(벡터) = 이전 위치(벡터) + 속도(벡터)
    // this.pos = this.pos + this.vel;
    this.pos.add(this.vel);
    this.w -= 0.5;
  }
  
  distToMouse() {
    let m = createVector(mouseX, mouseY);
    return p5.Vector.dist(this.pos, m);
  }
  
  show() {
    if (this.w > 0) {
      fill(this.c);
      circle(this.pos.x, this.pos.y, this.w);
    }
  }
}