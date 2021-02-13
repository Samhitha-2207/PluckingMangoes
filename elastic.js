class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }
    fly(){
        this.elastic.bodyA = null;
    }
    attach(body) {
        this.elastic.BodyA = body;
    }
    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            strokeWeight(4);
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            }
            pop();
        }
    }
}