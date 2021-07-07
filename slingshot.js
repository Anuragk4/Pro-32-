class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1

        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //this.sling1 = loadImage('sprites/sling1.png')
        //this.sling2 = loadImage('sprites/sling2.png')
        //this.sling3 = loadImage('sprites/sling3.png')
        
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA=body
        
     }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
      
       // image(this.sling1,200,50)
       // image(this.sling2,170,50)
     //  image(this.sling3,200,50)
 
               
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
        //line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
      line(pointA.x,pointA.y,pointB.x,pointB.y)
        
      
        }
    
    }
}