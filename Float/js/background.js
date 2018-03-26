
var sunSize = 40;
var theSun = new Sun();

// function to create a background 'object'
function Background() {
    // function to draw the background
    this.show = function () {
        background(0, 220, 255);
        theSun.update();
        theSun.show();
    }
}

// function to create a sun 'object'
function Sun() {
    this.x = 500;
    this.y = 50;
    this.pulse = 0.2;
    // function to update sun's size
    this.update = function () {
        if (sunSize >= 50 || sunSize <= 35)
        {
            this.pulse = -this.pulse;
        }
        sunSize += this.pulse;
    }
    // function to draw the sun
    this.show = function () {
        noStroke();
        fill(255, 255, 0);
        ellipse(this.x, this.y, sunSize, sunSize);
    }
}