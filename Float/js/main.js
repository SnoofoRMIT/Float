// initialise global variables here
var canvas;
var gameSpeed = 2;
var bground;
var fground = [];
var ground;
var gravity = .2;
var player;
var playerImg;

function preload() {
    // load player image here
    playerImg = loadImage("https://i.imgur.com/Quggv8b.jpg");
}
// This function does all the necessary on-load initialisation stuff
function setup() {
    // Creates a canvas 600 width 400 height
    createCanvas(600, 400);
    playerImg.resize(0, 50);
    ground = height - (height / 3);
    bground = new Background();
    fground.push(new Foreground(0, width * 2, height));
    player = new Player();
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
        fground.push(new Foreground(width, width * 2, height));
    } else if (fground[0].offscreen()) {
        fground.splice(0, 1);
    }
    player.update();
    player.show();

}

function keyTyped() {
    if (key == 'w') {
        player.jump();
    }
    if (key == 'a') {
        player.moveLeft();
    }
    if (key == 'd') {
        player.moveRight();
    }
}