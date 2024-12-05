function setup() {
  createCanvas(740, 740, WEBGL);  
  frameRate(30);
  angleMode(DEGREES);
  textSize(10); 
  textAlign(CENTER, CENTER); 
}

function draw() {
  background(0);
  translate(0, 0, -300);
  drawSquareRings();
}

function drawSquareRings() {
  let rings = [
 { count: 350, radius: 50, size: 20 },
    { count: 298, radius: 100, size: 20 },
    { count: 381, radius: 150, size: 20 },
    { count: 302, radius: 200, size: 20 },
    { count: 435, radius: 250, size: 20 },
    { count: 339, radius: 300, size: 20 },
    { count: 409, radius: 350, size: 20 },
  ];

  for (let ringIndex = 0; ringIndex < rings.length; ringIndex++) {
    let ring = rings[ringIndex];
    push();
    rotateY(frameCount * 3);
    //ellipse(0,0,1200,800)
    drawRing(ring.count, ring.radius, ring.size, ringIndex + 1);
    pop();
  }
}

function drawRing(count, radius, size, ringNumber) {

  let direction = ringNumber % 2 === 0 ? -1 : 1;
  let angleStep = direction * 360 / count;

  for (let i = 0; i < count; i++) {
    let angle = angleStep * i;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    let z = sin(frameCount * 2) * 50; 

    let r = random(100, 200);
    let g = random(100, 200);
    let b = random(100, 200);

    push();
    translate(x, y, z);  


    rotateY(frameCount * 0.05);  
    rotateZ(angle + 35);  
    noStroke();
    
    if (i % 2 === 0) {
      fill(100, 100, b);
    } else {
      fill(255);
    }
    

    box(size, size, size);  
    
    pop();
  }
}
