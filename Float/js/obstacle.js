

// function to create an obstacle 'object'
// that takes x and y coordinates as parameters
function Obstacle(x, y) {
    this.x = x + 100;
    this.y = y;

    // function to show the obstacle
    this.show = function () {
        ellipse(this.x, this.y + 20, 100, 100);
        ellipse(this.x + (width / 2), this.y + 20, 200, 100);
    }
    // function to update obstacle coordinates
    this.update = function (){

    }
}