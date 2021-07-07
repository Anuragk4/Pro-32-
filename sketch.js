const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var ground,pgImg
function preload(){
pgImg=loadImage('polygon.png')
}

function setup(){
   createCanvas(1200,400);
 
    engine = Engine.create();
    world = engine.world;
Engine.run(engine)

    ground = new Ground(600,300,1200,20);
 


   block1= new Block(330,235,30,40)
   block2= new Block(360,235,30,40)
   block3= new Block(390,235,30,40)
   block4= new Block(420,235,30,40)
   block5= new Block(450,235,30,40)
   block6= new Block(360,195,30,40)
   block7= new Block(390,195,30,40)
   block8= new Block(420,195,30,40)
   block9= new Block(390,155,30,40)

   polygon= Bodies.circle(50,200,20)
World.add(world,polygon)


    slingshot=new SlingShot(this.polygon,{x:100,y:200})
    






}
function draw(){

    background("pink");
    //Engine.update(engine);
    text("SCORE:"+score,750,40)
    imageMode(CENTER)
    image(pgImg,polygon.position.x,polygon.position.y,40,40)
    
    

    ground.display()
   


   block1.display()
   block2.display()
   block3.display()
   block4.display()
   block5.display()
   block6.display()
   block7.display()
   block8.display()
   block9.display()

   slingshot.display()
   block1.Score()
   block2.Score()
   block3. Score()
   block4. Score()
   block5. Score()
   block6. Score()
   block7. Score()
   block8. Score()
   block9. Score()









   
}






function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



function keyPressed(){
    if (keyCode === 32){
        console.log("Pressed")
        slingshot.attach(this.polygon)
        
    }
}

