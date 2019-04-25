var ctracker;
var slider;
var cfont;
var ifont;
statstars = [];
var statstar;


var mgr;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene(Intro);
    mgr.addScene(Planetarium);

    mgr.showNextScene();

    cfont = loadFont('assets/weather.otf');
    ifont = loadFont('assets/courier.ttf');
}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
    mgr.handleEvent("mousePressed");
}

// Intro scene constructor function
function Intro(){
  class StatStar {
    constructor() {
      this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);      
        this.pz = this.z;
    }
    update() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = width/2;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    }
  
    show() {
      fill(255);
      noStroke();
      
      var sx = map(this.x/this.z, 0, 1, 0, width);
      var sy = map(this.y/this.z, 0, 1, 0, height);
      var r = map(this.z, 0, width, 12, 0);
      ellipse(sx, sy, r, r);    
      
      var px = map(this.x/this.pz, 0, 1, 0, width);
      var py = map(this.y/this.pz, 0, 1, 0, height);
      this.pz = this.z;
    }}

    this.setup = function() {
      var cnv = createCanvas(windowWidth, windowHeight);

      hbd = loadImage('assets/hbd.JPG')

      statstar = new StatStar();
      // Create an array of 1600 star objects
      for (var i = 0; i < 1600; i++) {
          statstars[i] = new StatStar();
      }
    }

    this.draw = function() {
      background(0);
      fill(255);
      textAlign(CENTER);
      textSize(72);
      textFont(ifont);
      text("Happy Birthday Dad!", width/2, -100+height/2);

      textSize(24);
      textFont(ifont);
      text("Click anywhere to venture to the next page!", width/2, height/2);


      speed = map(mouseX, 0, width, 2, 10);
      translate(width/2, height/2);
      
      for (var i = 0; i < statstars.length; i++) {
        statstars[i].update();
          statstars[i].show();
    }

    this.mousePressed = function() {
        // switch the scene
        this.sceneManager.showScene(Planetarium);
    }
}
}

// Main scene constructor function
function Planetarium(){

    this.setup = function() {
      
      // setup canvas
      var cnv = createCanvas(windowWidth, windowHeight);
      cnv.position(0, 0);

    }

    this.draw = function() {
      background(0, 85, 136);
      image(hbd, 0, 0, image.width/4, image.height/4)
      textSize(34);
      text("Happy Birthday to the best dad ever!", 300+width/2, 100);
      textSize(24);
      text("I miss and love you lots!", 300+width/2, 300)
      text("Love, Cam", 300+width/2, 400)
      
    }
  }
