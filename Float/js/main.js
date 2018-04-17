// initialise global variables here
var canvas;
var gameSpeed = 2;
var bground = [];
var fground = [];
var ground;
var gravity = .2;
var player;
var playerImg;
var backgroundImg;
var foregroundImg;

function preload() {
    // load all images here
    backgroundImg = loadImage("images/background.jpg");
    foregroundImg = loadImage("images/foreground.jpg");
}
// This function does all the necessary on-load initialisation stuff
function setup() {
    // Creates a canvas 600 width 400 height
    createCanvas(600, 400);
    ground = height - 24;
    backgroundImg.resize(width, height / 3);
    foregroundImg.resize(width, height - (height / 3));
    bground.push(new Background(0));
    bground.push(new Background(width));
    fground.push(new Foreground(0));
    fground.push(new Foreground(width));
    player = new Player();
}

// This is the game loop. Anything put in here is looped over continuously
function draw() {

    for (var i = 0; i < fground.length; ++i) {
        bground[i].show();
        bground[i].update();
    }

    if (bground[0].needsNew()) {
        bground.push(new Background(width));
    }
    if (bground[0].offscreen()) {
        bground.splice(0, 1);
    }

    for (var i = 0; i < fground.length; ++i) {
        fground[i].show();
        fground[i].update();
    }

    if (fground[0].needsNew()) {
        fground.push(new Foreground(width));
    }
    if (fground[0].offscreen()) {
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