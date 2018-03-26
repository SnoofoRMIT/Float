
// function to create a foreground 'object'
function Foreground(width, height) {
    this.base = height - (height / 3);
    this.x = width;
    this.y = this.base;
    // function to update foreground (make it move)
    this.update = function () {
        this.x -= gameSpeed;
    }
    // function to draw the foreground in it's current coordinates
    this.show = function () {
        fill(150,90,80);
        rect(this.x, this.y, width * 2, height);
        ellipse(this.x + (width / 2), this.y + 20, 200, 100);
        ellipse(this.x + (width * 1.5), this.y + 20, 100, 100);
    }
    this.offscreen = function () {
        return this.x < -(width);
    }
}