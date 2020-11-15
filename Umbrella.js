class Umbrella {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      }
      this.width = width;
      this.height = height;
      this.width = 40;
      this.height = 40;
      this.boy_walking = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      boy = createSprite(200,530,50,50);
      boy.addAnimation("walking", this.boy_walking);
      boy.scale = 0.2;
      pop();
    }
  };