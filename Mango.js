class Mango
{
	constructor(x, y, radius)
	{
		var options =
		{
			isStatic: true,
			restitution: 0,
            friction: 1
		}
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.image = loadImage("images/mango.png")
		this.body = Bodies.circle(this.x, this.y, this.radius, options);
		World.add(world, this.body);
	}

	display()
	{
		var pos = this.body.position;	
		push();
		translate(pos.x, pos.y);
		imageMode(CENTER);
		image(this.image, 0, 0, this.radius, this.radius);
		pop();
	}
}