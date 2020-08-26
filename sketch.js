const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
//json format - java script object notation
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ballOptions={
        restitution:0.8
    }
    ball = Bodies.circle(200,50,20,ballOptions);
    World.add(world,ball);

    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("pink")
    rect(ground.position.x,ground.position.y,400,20);
    fill("blue")
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
}