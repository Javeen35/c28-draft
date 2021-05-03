class launcher{
    constructor(body,anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA=body
        this.pointB = anchor
        this.launch = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach (body){
        this.launcher.bodyA=body;
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){
        if(this.launch.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
    