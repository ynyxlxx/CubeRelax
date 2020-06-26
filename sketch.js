/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

// var position;
// var velocity;

// var haha = new p5.Vector(1, 2);


// function setup() {
//   createCanvas(1000, 800);
//   background(200);
//   position = createVector(100, 100);
//   velocity = createVector(1, 3.3);


// }


// function draw() {
//   background(200);

//   position.add(velocity);

//   if (position.x > width || position.x < 0) {
//     velocity.x *= -1;
//   }
//   if (position.y > height || position.y < 0) {
//     velocity.y *= -1;
//   }

//   stroke(0);
//   fill(10);
//   ellipse(position.x, position.y, 100, 100);

// }

let angle = 0;
let w = 24;
let ma;
let maxD;
let myHeight = 100;
let myWidth = 100;

function setup() {
  createCanvas(screen.width, screen.height, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 10, 10);
}

function draw() {
  background(232, 221, 203);
  ortho(-300, 300, -300, 300, 0, 5000);

  rotateX(-ma);
  rotateY(QUARTER_PI);

  rectMode(CENTER);
  let offset = 0;
  for (let z = 0; z < myHeight; z += w) {
    for (let x = 0; x < myWidth; x += w) {
      push();
      let d = dist(x, z, myWidth / 2, myHeight / 2);
      let offset = map(d, 0, maxD, -2, 2);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 200));
      normalMaterial();
      translate(x - myWidth / 2, 0, z - myHeight / 2);
      box(w, h, w - 2);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);

      pop();
    }
    offset += 0.15;
  }
  angle += 0.1;

  frameRate(30);
}