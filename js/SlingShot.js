class SlingShot 
{
    constructor(bodyA, pointB)
    {
        var options =
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 50
        }

        this.pointB=pointB;
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(body)
    {
       this.sling.bodyA = body; 
    }


    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;

            strokeWeight (5);
            line (posA.x,posA.y,posB.x,posB.y);
        }
    }
};