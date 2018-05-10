﻿// initialise global variables here
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
var music;
var gameState;
var GameStates = {
    Running: {value: "Running"},
    Over: {value: "Game Over"},
    Menu: {value: "Menu"}
};
var score = 0;
var highscores = [];
var stopwatch;
var pointTimer;

function preload() {
    // load all images here
    backgroundImg = loadImage("images/background.jpg");
    foregroundImg = loadImage("images/foreground.jpg");
}
// This function does all the necessary on-load initialisation stuff
function setup() {
    // Creates a canvas 600 width 400 height
    createCanvas(600, 400);
    ground = height * 0.885;
    backgroundImg.resize(width, height / 2.9);
    foregroundImg.resize(width, height - (height / 3));
    bground.push(new Background(0));
    bground.push(new Background(width));
    fground.push(new Foreground(0));
    fground.push(new Foreground(width));
    player = new Player();
    pointTimer = setInterval(scoreTimer, 1000);
    document.getElementById("gameMusic").play();
    gameState = GameStates.Running;
}

function scoreTimer(){
    ++score;
}

function bonusScore(){
    score += 10;
}

// This is the game loop. Anything put in here is looped over continuously
function draw() {
    switch (gameState){
        case GameStates.Running:{
            for (var i = 0; i < bground.length; ++i) {
                bground[i].show();
                bground[i].update();
            }
            if (bground[0].needsNew()) {
                bground.push(new Background(width));
                bground.splice(0, 1);
            }

            for (var i = 0; i < fground.length; ++i) {
                fground[i].show();
                fground[i].update();
            }

            if (fground[0].needsNew()) {
                fground.push(new Foreground(width));
                fground.splice(0, 1);
            }
            player.update();
            player.show();
            noStroke();
            fill(0);
            textSize(20);
            // text("Time:" + stopwatch.getElapsedTime(), width / 2, height / 2);
            text("Score: " + score, width * .8, height *.1);
            break;
        }
        case GameStates.Over:{
            // gameover stuff here
            textAlign(CENTER, CENTER);
            stroke(0);
            fill(230,100,100);
            textSize(20);
            text("GAME OVER", width / 2, height / 2);
            document.getElementById("gameMusic").pause();
            var button = document.getElementById("menuButton");
            button.style.visibility = "visible";
            var highScore = document.getElementById("scoresButton");
            highScore.style.visibility = 'visible';
            // highScore.innerHTML = highscores;
            break;
        }
        case GameStates.Menu:{
            window.location.href = "./index.html"; 
            break;
        }
        default:
            break;
    }
}

function gotoMenu(){
    gameState = GameStates.Menu;
}

function keyTyped() {
    if (key == 'w' && gameState == GameStates.Running) {
        player.jump();
    }
//    if (key == 'a') {
//        player.moveLeft();
//    }
//    if (key == 'd') {
//        player.moveRight();
//    }
}
function keyReleased() {
//    if (keyCode == 65) {
//        player.move = 0;
//    }
//    if (keyCode == 68 && !keyIsDown(65)) {
//        player.move = 0;
//    }
    if (keyCode == 87) {
        player.jumping = false;
    }
}