var playerHeight = 50;
var startX = 100;

// function to create the player
function Player() {
    this.x = startX;
    this.y = ground;
    this.jumpH = -8;
    this.velocity = 0;
    this.jumping = false;
    this.balloonDog = new BalloonDog();
    // function to show the player
    this.show = function () {
        // fill(color(255, 50, 50));
        // rect(this.x, this.y - playerHeight, 20, playerHeight);
        // image(this.img, this.x, this.y - 50);
         this.balloonDog.draw(this.x, this.y-50, .4);
    }
    // function to control the players movement
    this.update = function () {
        this.velocity += gravity;
        this.velocity *= .95;
        this.y += this.velocity;
        if (this.y > ground) {
            this.y = ground;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = ground;
            this.velocity = 0;
        }
    }

    this.jump = function () {
        // remove this if to make floating dog
        if (this.y == ground) {
            this.velocity += this.jumpH;
        }
    }

    this.moveLeft = function () {
        if (this.x > 0) {
            this.x -= 10;
        }
    }
    this.moveRight = function () {
        if (this.x < 200) {
            this.x += 10;
        }
    }
}