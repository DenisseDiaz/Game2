const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,world,groud;



function setup(){
  canvas = createCanvas(850,400);
  engine = Engine.create();
world = engine.world;
ground = new Ground(600,height,1200,20,);


}


function draw(){
  background("pink");
ground.display();
}
