
// initialise variables here
var gameSpeed = 1;
var bground;
var fground = [];
var groundHeight;
var player;

// This function does all the necessary on-load initialisation stuff
function setup() {
    // Creates a canvas 600 width 400 height
    createCanvas(600, 400);
    ground = height - (height / 3);
    bground = new Background();
    fground.push(new Foreground(0, width * 2, height));
    //add new player object
    //fground.push(new Foreground(width*2, width*4, height));
}

// This is the game loop. Anything put in here is looped over continuously
function draw() {
    // draws the background image from background.js
    bground.show();
    for (var i = 0; i < fground.length; ++i) {
        fground[i].show();
        fground[i].update();
    }
    if (fground[0].needsNew()) {
        fground.push(new Foreground(width, width*2, height));
    }
    else if (fground[0].offscreen()) {
        fground.splice(0, 1);
    }

}