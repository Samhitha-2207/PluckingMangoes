class Stone{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        //this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display() {
        var stonepos = this.body.position;
        //image(this.image,0,0,this.width,this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}