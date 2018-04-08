
// function to create a foreground 'object'
function Foreground(width, height) {
    this.base = height - (height / 3);
    this.x = width;
    // y coordinate is the ground of the foreground
    // use this point for where player stands and obstacles sit
    this.y = this.base;
    // create new obstacle 'objects'
    var obs = new Obstacle(this.x, this.y);
    // function to update foreground (make it move)
    this.update = function () {
        this.x -= gameSpeed;
    }
    // function to draw the foreground in it's current coordinates
    this.show = function () {
        fill(150, 90, 80);
        // this rect is the 'ground'
        rect(this.x, this.y, width * 2, height);
        // show obstacles on foreground
        obs.show();
        obs.update();
    }
    this.offscreen = function () {
        return this.x < -(width);
    }
}