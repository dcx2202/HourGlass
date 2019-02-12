class Particle
{
    constructor(x, y, r, hue)
    {
        this.pos = createVector(x, y);
        this.radius = r;
        this.hue = hue;
    }

    show()
    {
        colorMode(HSB);
        stroke(this.hue, 255, 255);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.a);
        rect(0, 0, this.w, this.h);
        pop();
    }
}