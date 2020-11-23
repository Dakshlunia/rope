const Engine = Matter.Engine,
World=Matter.World,
Body = Matter.Body,
Bodies= Matter.Bodies,
Constraint=Matter.Constraint;

var ball,rope,box1,box2,box3,boxes=[];
var engine,world;
var ground;



function setup() {
  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

ground = new Ground(600,590,1200,20);
ball = new Ball(200,300,50);
rope = new SlingShot(ball.body,{x:500,y:50});
for(var i=0;i<7;i ++){
  box1=new Box(900,100,70,70);
  box2=new Box(800,100,70,70);
  box3=new Box(700,100,70,70);
  boxes.push(box1);
  boxes.push(box2);
  boxes.push(box3);
}

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  for(var i = 0;i<boxes.length;i ++){
    boxes[i].display();
  }
}