class drop
{

    constructor(x, y)
    {

        var dropOptions = 
        {

            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body = Bodies.circle(x, y, 5, dropOptions);
        this.x = x;
        this.y = y;
        World.add(world, this.body);

    }

    display()
    {

        var position = this.body.position;

        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, 3, 3);

    }

    reset()
    {

        if(this.body.position.y > 450)
        {

            Matter.Body.setPosition(this.body, {x: random(0, 350), y: random(0, 20)});

        }

    }

}