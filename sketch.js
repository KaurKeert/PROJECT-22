const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground,ball;


function setup(){
    var canvas = createCanvas(400,400);
    
engine=Engine.create()
world=engine.world

var ground_option={
    isStatic:true
}
var ball_option={
    restitution:1.5
}
ground=Bodies.rectangle(200,350,400,20,ground_option)
World.add(world,ground)

 ball=Bodies.circle(200,200,20,ball_option)
World.add(world,ball)

}

function draw(){
    background(0);
   Engine.update(engine)
    ellipseMode(RADIUS)
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,20,20);

}
