var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;



var width;
var height;

var engine = Engine.create({enableSleeping: false});
var world = engine.world;

var particles;
var boundaries;

var add_Particles;

var start_time;
var end_time;
var fr;


function setup()
{
    width = window.innerWidth - 20;
    height = window.innerHeight - 20;
    createCanvas(width, height);

    particles = [];
    boundaries = [];

    // Plug
    var boundary = new Boundary(width / 2, height * 0.2 + 240, 42, 10, 0);
    boundaries.push(boundary);

    // Top
    boundary = new Boundary(width / 2, height * 0.2, 300, 10, 0);
    boundaries.push(boundary);

    // Bottom
    boundary = new Boundary(width / 2, height * 0.2 + 500, 300, 10, 0);
    boundaries.push(boundary);


    // Left Side Top
    boundary = new Boundary(width / 2 - 150 + 5, height * 0.2 + 45, 10, 100, 0);
    boundaries.push(boundary);

    // Right Side Top
    boundary = new Boundary(width / 2 + 150 - 5, height * 0.2 + 45, 10, 100, 0);
    boundaries.push(boundary);


    // Left Side Bottom
    boundary = new Boundary(width / 2 - 150 + 5, height * 0.2 + 455, 10, 100, 0);
    boundaries.push(boundary);

    // Right Side Bottom
    boundary = new Boundary(width / 2 + 150 - 5, height * 0.2 + 455, 10, 100, 0);
    boundaries.push(boundary);


    // Left Side Top Ramp
    boundary = new Boundary(width / 2 - 78, height * 0.2 + 172, 10, 210, -0.7);
    boundaries.push(boundary);

    // Right Side Top Ramp
    boundary = new Boundary(width / 2 + 78, height * 0.2 + 172, 10, 210, 0.7);
    boundaries.push(boundary);


    // Left Side Bottom Ramp
    boundary = new Boundary(width / 2 - 78, height / 2 - 64, 10, 210, 0.7);
    boundaries.push(boundary);

    // Right Side Bottom Ramp
    boundary = new Boundary(width / 2 + 78, height / 2 - 64, 10, 210, -0.7);
    boundaries.push(boundary);

    add_Particles = true;

    fr = frameRate();

    textSize(24);
    textAlign(CENTER);
}

function addParticle(x, y)
{
    var particle = new Particle(x, y, 4.5);
    particles.push(particle);
}

function mousePressed()
{
    if(!add_Particles)
        return;
    
    world.bodies.splice(0, 1);
    boundaries.splice(0, 1);

    add_Particles = false;

    addParticle(width / 2, height * 0.2 + 240);

    start_time = new Date().getTime();
}

function draw()
{
    background(0);

    if(add_Particles)
        addParticle(width / 2 + random(-20, 20), height * 0.2 + 50);

    Engine.update(engine, 1000 / 60);


    var isFinished = true;

    for(particle of particles)
    {
        if(particle.body.position.y < height * 0.2 + 250)
            isFinished = false;

        particle.show();
    }

    if(isFinished && !end_time)
        end_time = new Date().getTime();

    if(!start_time)
        text("Click to start", width / 2, height * 0.2 + 550);
    else if(end_time)
        text("Time passed: " + (end_time - start_time) / 1000 + " seconds", width / 2, height * 0.2 + 550);
    else
        text("Time passed: waiting...", width / 2, height * 0.2 + 550);

    if(frameCount % 15 == 0)
        fr = floor(frameRate());

    text(fr + " fps", width / 2, height * 0.2 + 600);

    for(boundary of boundaries)
        boundary.show();
}