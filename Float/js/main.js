
// initialise variables here
var gameSpeed = 1;
var bground;
var fground;


// This function does all the necessary on-load initialisation stuff
function setup() {
    // Creates a canvas 600 width 400 height
    createCanvas(600, 400);
    bground = new Background();
    fground = new Foreground(width, height);
    //fground.push(new Foreground(width, height));
    //fground.push(new Foreground(width, height));
}

// This is the game loop. Anything put in here is looped over continuously
function draw() {
    // draws the background image from background.js
    bground.show();
    fground.show();
    fground.update();
    //if (fground[0].finished()) {
    //    fground.splice(0, 1);
    //}

}