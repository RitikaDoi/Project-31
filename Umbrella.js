class umbrella
{

    constructor()
    {

        this.body = Bodies.circle(155, 362, 100, {isStatic: true});
        this.Image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);

    }

    display()
    {

        image(this.Image, 58, 221, 200, 300);

    }

}