class Ball{
    constructor(x, y) {
        var options = {
          'restitution':0.8,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30
        World.add(world, this.body);
      }
      display(){
        ellipseMode(RADIUS)
        var pos =this.body.position;

        ellipse(pos.x, pos.y,this.radius);
      }
   }