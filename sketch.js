const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions = [];
var particles = [];
var plinko = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    for(var i = 0; i<=width; i = i+80){
      divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
    for(var j = 40; j<=width;j=j+50){
      plinko.push(new Plinko(j,75));
    }
    for(var j = 15; j<=width-10; j=j+50){
      plinko.push(new Plinko(j,175));
    }
    for(var j = 65; j<=width-20; j=j+50){
      plinko.push(new Plinko(j, 275));
    }
    for(var j = 0; j<particles.length; j++){
      particles[j].display();
     }
     for(var k = 0; k < divisions.length; k++){
       divisions[k].display();
     }
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);
  ground.display();
  drawSprites();
  
  }
}