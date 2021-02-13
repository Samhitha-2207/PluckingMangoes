class Tree{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.TreeWidth = 450;
        this.TreeHeight = 600;
        this.TreeThickness = 7;
        this.image = loadImage("images/tree.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true});
        World.add(world,this.bottomBody);
    }

    display() {
        push();
        var posBottom = this.bottomBody.position;
        translate(posBottom.x, posBottom.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,-this.TreeHeight/2,this.TreeWidth,this.TreeHeight);
        pop();
    }
}