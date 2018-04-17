function BalloonDog() {
    const RUN = 'run';
    const JUMP = 'jump';
    const CROUCH = 'crouch';

    this.frameNumber = 0;
    this.drawPosition = RUN;


    this.draw = function (x, y, scale) {
        scale = scale || 1;                             //optional parameter which defaults to 1
        this.frameNumber++;

        if (!(this.frameNumber % 30)) {
            if (this.drawPosition === RUN) {
                this.drawPosition = JUMP;
            } else {
                this.drawPosition = RUN;
            }
        }

        if (this.drawPosition === RUN) {
            strokeWeight(40 * scale);
            strokeCap(ROUND);
            //far rear leg
            stroke(153, 0, 254, 200);
            bezier(x - (10 * scale), y + (15 * scale), x - (5 * scale), y + (15 * scale), x + (15 * scale), y + (50 * scale), x + (10 * scale), y + (50 * scale));
            //far front leg
            stroke(0, 153, 200);
            bezier(x + (100 * scale), y + (15 * scale), x + (105 * scale), y + (15 * scale), x + (75 * scale), y + (50 * scale), x + (70 * scale), y + (50 * scale));
            //far ear
            stroke(255, 200, 0, 200);
            bezier(x + (105 * scale), y - (60 * scale), x + (110 * scale), y - (60 * scale), x + (95 * scale), y - (80 * scale), x + (90 * scale), y - (80 * scale));
            //body
            stroke(255, 0, 0, 200);
            line(x, y, x + (80 * scale), y);
            //neck
            stroke(255, 103, 102, 200);
            bezier(x + (110 * scale), y - (15 * scale), x + (115 * scale), y - (15 * scale), x + (125 * scale), y - (40 * scale), x + (120 * scale), y - (40 * scale));
            //near rear leg
            stroke(255, 255, 0, 200);
            bezier(x - (10 * scale), y + (15 * scale), x - (5 * scale), y + (15 * scale), x + (25 * scale), y + (45 * scale), x + (20 * scale), y + (45 * scale));
            //near front leg
            stroke(51, 204, 51, 200);
            bezier(x + (100 * scale), y + (15 * scale), x + (105 * scale), y + (15 * scale), x + (85 * scale), y + (50 * scale), x + (80 * scale), y + (50 * scale));
            //near ear
            stroke(255, 50, 0, 200);
            bezier(x + (110 * scale), y - (60 * scale), x + (115 * scale), y - (60 * scale), x + (105 * scale), y - (80 * scale), x + (100 * scale), y - (80 * scale));
            //nose base
            strokeWeight(30 * scale)
            stroke(255, 50, 150, 200);
            line(x + (145 * scale), y - (55 * scale), x + (155 * scale), y - (55 * scale));
            //tail base
            stroke(255, 102, 0, 200);
            line(x - (20 * scale), y - (15 * scale), x - (25 * scale), y - (20 * scale));
            //tail end
            strokeWeight(10 * scale);
            stroke(255, 102, 0, 200);
            line(x - (35 * scale), y - (35 * scale), x - (45 * scale), y - (50 * scale));
            //nose tip
            fill(255, 50, 150, 200);
            noStroke();
            triangle(x + (169 * scale), y - (55 * scale), x + (174 * scale), y - (62 * scale), x + (174 * scale), y - (48 * scale));


        } else if (this.drawPosition === JUMP) {
            strokeWeight(40 * scale);
            strokeCap(ROUND);
            //far rear leg
            stroke(153, 0, 254, 200);
            bezier(x - (10 * scale), y + (15 * scale), x - (5 * scale), y + (15 * scale), x - (35 * scale), y + (50 * scale), x - (40 * scale), y + (50 * scale));
            //far front leg
            stroke(0, 153, 200);
            bezier(x + (100 * scale), y + (15 * scale), x + (105 * scale), y + (15 * scale), x + (135 * scale), y + (50 * scale), x + (130 * scale), y + (50 * scale));
            //far ear
            stroke(255, 200, 0, 200);
            bezier(x + (130 * scale), y - (40 * scale), x + (130 * scale), y - (45 * scale), x + (110 * scale), y - (45 * scale), x + (110 * scale), y - (40 * scale));
            //body
            stroke(255, 0, 0, 200);
            line(x, y, x + (80 * scale), y);
            //neck
            stroke(255, 103, 102, 200);
            bezier(x + (110 * scale), y - (15 * scale), x + (110 * scale), y - (10 * scale), x + (130 * scale), y - (15 * scale), x + (130 * scale), y - (20 * scale));
            //near rear leg
            stroke(255, 255, 0, 200);
            bezier(x - (10 * scale), y + (15 * scale), x - (5 * scale), y + (15 * scale), x - (20 * scale), y + (50 * scale), x - (25 * scale), y + (50 * scale));
            //near front leg
            stroke(51, 204, 51, 200);
            bezier(x + (100 * scale), y + (15 * scale), x + (100 * scale), y + (10 * scale), x + (120 * scale), y + (45 * scale), x + (120 * scale), y + (50 * scale));
            //near ear
            stroke(255, 50, 0, 200);
            bezier(x + (130 * scale), y - (40 * scale), x + (130 * scale), y - (45 * scale), x + (115 * scale), y - (55 * scale), x + (115 * scale), y - (50 * scale));
            //nose base
            strokeWeight(30 * scale);
            stroke(255, 50, 150, 200);
            line(x + (155 * scale), y - (25 * scale), x + (165 * scale), y - (25 * scale));
            //tail base
            stroke(255, 102, 0, 200);
            line(x - (20 * scale), y - (15 * scale), x - (25 * scale), y - (15 * scale));
            //tail end
            strokeWeight(10 * scale);
            stroke(255, 102, 0, 200);
            line(x - (40 * scale), y - (15 * scale), x - (55 * scale), y - (15 * scale));
            //nose tip
            fill(255, 50, 150, 200);
            noStroke();
            triangle(x + (179 * scale), y - (25 * scale), x + (186 * scale), y - (32 * scale), x + (186 * scale), y - (18 * scale));
        }
    }
}


