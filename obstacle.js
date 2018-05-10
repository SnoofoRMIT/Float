

// function to create an obstacle 'object'
// that takes x and y coordinates as parameters
function Obstacle(x, y) {
    this.x = x + (width / 2);
    this.height = 40;
    this.y = y - this.height;
    this.width = 20;

    // function to show the obstacle
    this.show = function () {
        noStroke();
        fill(255,100,50);
        rect(this.x, this.y, this.width, this.height);
    }
    // function to update obstacle coordinates
    this.update = function (){
        this.x -= gameSpeed;
    }
    // function to detect collision with player
    this.collide = function (player) {
            if (this.x <= (player.x + playerWidth) && (this.x + this.width) >= player.x - 10
                && this.y <= (player.y + playerHeight) && (this.y + this.height) >= player.y){
                return true;
            }
            return false;
    }

    this.offScreen = function(){
        if (this.x < - 20){
            return true;
        } else return false;
    }
}