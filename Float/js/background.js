var sunSize = 40;
var theSun = new Sun();

function DrawBackground() {
    this.show = function () {
        background(0, 220, 255);
        theSun.show();
    }
}

function Sun() {
    this.x = 50;
    this.y = 50;

    this.show = function () {
        noStroke();
        fill(255, 255, 0);
        ellipse(this.x, this.y, sunSize, sunSize);
    }
}