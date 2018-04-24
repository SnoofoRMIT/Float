

// function to create an obstacle 'object'
// that takes x and y coordinates as parameters
function Obstacle(x, y) {
    this.x = x + (width / 2);
    this.y = y - 20;

    // function to show the obstacle
    this.show = function () {
        rect(this.x, this.y, 20, 20);
    }
    // function to update obstacle coordinates
    this.update = function (){
        this.x -= gameSpeed;
    }
    // function to detect collision with player
    this.collide = function (player) {
            if (this.x <= (player.x + playerWidth) && (this.x + 20) >= player.x - 10
                && this.y <= (player.y + playerHeight) && (this.y + 20) >= player.y){
                return true;
            }
            return false;
        }
    }