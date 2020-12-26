/*class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offsetX, y:this.offsetY}

        }

       
     //  this.pointB = pointB
        this.rope = Constraint.create(options)
       World.add(world,this.rope); 
    
    }

    

    display(){ 
        if(this.rope.bodyA)
        {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyA.position;
            
    
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y); 
        }

        if(this.rope.bodyB)
        {
            pointA = this.rope.bodyB.position;
            pointB = this.rope.bodyB.position;


            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}     */

class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  

