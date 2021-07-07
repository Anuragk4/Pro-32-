class Block {
  constructor(x, y, width, height) {

    var options = {
      'restitution': 0.8,
      'friction': 0.6,
      'density': 1.0,

    }
    this.visiblity = 255
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  Score() {
    if (this.visiblity < 0 && this.visiblity > -105)
      score++
  }
  display() {
    
   
    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();//display();
      
    }
    else {
     
     World.remove(world,this.body)
     push()
      this.visiblity = this.visiblity - 5
      //tint(255, this.visiblity)
      pop()
    }

   

  }

 

};

