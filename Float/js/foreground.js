﻿
// function to create a foreground 'object'
function Foreground(startX) {
    // this.base = ground;
    this.img = foregroundImg;
    this.x = startX;
    // y coordinate is the ground of the foreground
    // use this point for where player stands and obstacles sit
    this.y = height / 3;
    // create an array of new obstacle 'objects'
    var obs = [];
    obs.push(new Obstacle(this.x, ground));
    // function to update foreground (make it move)
    this.update = function () {
        this.x -= gameSpeed;
    }
    // function to draw the foreground in it's current coordinates
    this.show = function () {
        image(this.img, this.x, this.y);
        // show obstacles on foreground
        for (var i = obs.length-1; i >= 0; --i) {
            obs[i].update();
            if (obs[i].collide(player)) {
                document.getElementById("popSound").play();
                gameState = GameStates.Over;
                highscores.push(score);
            }
            obs[i].show();
            if (player.x > obs[i].x + obs[i].width
                && player.x < obs[i].x + obs[i].width + 5){
                bonusScore();
            }
        }
    }
    // function to check if the foreground is off the screen
    this.needsNew = function () {
        return this.x < (-width);
    }
}