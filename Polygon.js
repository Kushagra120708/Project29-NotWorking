class Polygon {
  constructor(x,y,r) {
    var options = {  
        restitution:0.4,
        friction:0.1,
        density:1.0
      }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    this.image = loadImage("polygon.png");
    World.add(world, this.body);
  }
  display(){
      strokeWeight(1)
      imageMode(CENTER)
      image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
  }
}