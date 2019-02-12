class Particle
{
    constructor(x, y, r)
    {
        this.pos = createVector(x, y);
        this.radius = r;
        this.hue = random(360);
        this.body = new Bodies.circle(x, y, r, {friction: 0, restitution: 0});

        World.add(world, this.body);
    }

    show()
    {
        push();
        colorMode(HSB);
        fill(this.hue, 255, 255);
        stroke(this.hue, 255, 255);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.a);
        ellipse(0, 0, this.radius * 2);
        pop();
    }
}