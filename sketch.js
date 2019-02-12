var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;



var width;
var height;

var engine = Engine.createEngine({enableSleeping: true});
var world = engine.world;

var particles;
var boundaries;


function setup()
{
    width = window.innerWidth - 20;
    height = window.innerHeight - 20;
    createCanvas(width, height);

    particles = [];
    boundaries = [];

    // Top
    var boundary = new Boundary(width / 2, height * 0.2, 100, 10, 0);
    boundaries.push(boundary);

    // Bottom
    var boundary = new Boundary(width / 2, height * 0.8, 100, 10, 0);
    boundaries.push(boundary);

    // Left Side Top
    var boundary = new Boundary(width / 2 - 50, height * 0.2 + 25, 10, 50, 0);
    boundaries.push(boundary);

    // Right Side Top
    var boundary = new Boundary(width / 2 + 50, height * 0.2 + 25, 10, 50, 0);
    boundaries.push(boundary);

    // Left Side Bottom
    var boundary = new Boundary(width / 2 - 50, height * 0.8 - 25, 10, 50, 0);
    boundaries.push(boundary);

    // Right Side Bottom
    var boundary = new Boundary(width / 2 + 50, height * 0.8 - 25, 10, 50, 0);
    boundaries.push(boundary);
}

function draw()
{
    Engine.update(engine);

    for(particle of particles)
        particle.show();

    for(boundary of boundaries)
        boundary.show();
}