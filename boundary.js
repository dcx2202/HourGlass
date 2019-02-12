class Boundary
{
    constructor(x, y, w, h, a)
    {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.a = a;
    }

    show()
    {
        colorMode(RGB);
        fill(150);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.a);
        rect(0, 0, this.w, this.h);
        pop();
    }
}