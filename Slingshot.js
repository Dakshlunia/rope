class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 350
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(3);
        stroke(48,22,8);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
           
       
    }
    
}