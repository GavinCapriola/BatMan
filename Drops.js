// class Drops {
//     constructor(x, y, height, angle) {
//         var options = {
//             'friction':0.1,
//             isStatic: false
//         }
//         this.body = Bodies.rectangle(x, y, 5, 5, options);
//         this.width = 5;
//         this.height = 5;
//         // Matter.Body.setAngle(this.body, angle);
//         World.add(world, this.body);
//     }
//     display(){
//         var pos =this.body.position;
//         var angle = this.body.angle;
//         push();
//         translate(pos.x, pos.y);
//         rotate(angle);
//         noStroke();
//         fill("blue")
//         ellipseMode(RADIUS);
//         ellipse(0, 0, this.width, this.height);
//         pop();
//     }
//   };