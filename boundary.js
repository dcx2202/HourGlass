class Boundary
{
    constructor(x, y, w, h, a)
    {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.a = a;
        this.body = new Bodies.rectangle(x, y, w, h, {isStatic: true, angle: this.a});

        World.add(world, this.body);
    }

    show()
    {
        colorMode(RGB);
        noStroke();
        fill(255);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.a);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}