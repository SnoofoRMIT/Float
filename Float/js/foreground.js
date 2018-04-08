
// function to create a foreground 'object'
function Foreground(start, w, h) {
    this.base = ground;
    this.x = start;
    // y coordinate is the ground of the foreground
    // use this point for where player stands and obstacles sit
    this.y = this.base;
    this.width = w;
    // create an array of new obstacle 'objects'
    var obs = [];
    obs.push(new Obstacle(this.x, this.y));
    // function to update foreground (make it move)
    this.update = function () {
        this.x -= gameSpeed;
    }
    // function to draw the foreground in it's current coordinates
    this.show = function () {
        fill(150, 90, 80);
        // this rect is the 'ground'
        rect(this.x, this.y, this.width, h);
        // show obstacles on foreground
        for (var i = 0; i < obs.length; ++i) {
            obs[i].update(gameSpeed);
            obs[i].collide();
            obs[i].show();
        }
    }

    this.needsNew = function () {
        return this.x == -(width);
    }
    // function to check if foreground is off the screen
    this.offscreen = function () {
        return this.x <= -(width * 2);
    }
}