var playerHeight = 5;
var playerWidth = 55;
var startX = 100;
var moveSpeed = 3;
var maxJump = -7;

// function to create the player
function Player() {
    this.x = startX;
    this.y = ground;
    this.move = 0;
    this.jumpH = -1.4;
    this.velocity = 0;
    this.jumping = false;
    this.balloonDog = new BalloonDog();
    
    // function to show the player
    this.show = function () {
        // fill(color(255, 50, 50));
        // rect(this.x, this.y - playerHeight, 20, playerHeight);
        // image(this.img, this.x, this.y - 50);
         this.balloonDog.draw(this.x, this.y - 28, .4);
    }
    // function to control the players movement
    this.update = function () {
        this.velocity += gravity;
        this.velocity *= .99;
        this.y += this.velocity;
        this.x += this.move;
        if (this.x < 10) {
            this.move = 0;
        }
        if (this.x > width / 2) {
            this.move = 0;
        }
        if (keyIsDown(68) && this.x < width / 2) {
            this.x += moveSpeed;
        }
        if (keyIsDown(65) && this.x > 10) {
            this.x -= moveSpeed;
        }
        if (this.y > ground) {
            this.y = ground;
            this.velocity = 0;
        }
        if (this.jumping) {
            this.velocity += this.jumpH;
        }
        if (this.velocity < maxJump) {
            this.jumping = false;
        }
        //if (this.y < 0) {
        //    this.y = ground;
        //    this.velocity = 0;
        //}
    }

    this.jump = function () {
        // remove this if to make floating dog
        if (this.y == ground) {
            this.jumping = true;
            document.getElementById("jumpSound").play();
        }
    }

    this.moveLeft = function () {
        if (this.x > 0) {
            this.move = -moveSpeed;
        }
    }
    this.moveRight = function () {
        if (this.x < width / 2) {
            this.move = moveSpeed;
        }
    }
}