function BalloonDog() {
    const RUN = 'run';
    const JUMP = 'jump';
    const CROUCH = 'crouch';

    this.frameNumber = 0;
    this.drawPosition = RUN;


    this.draw = function(x, y, scale) {
        scale = scale || 1;                 //optional parameter which defaults to 1
        this.frameNumber++;
        
        if (!(this.frameNumber%30)){
            if (this.drawPosition === RUN){
                this.drawPosition = JUMP;
            }else{
                this.drawPosition = RUN;
            }
        }

        ellipseMode(CORNERS);
        noStroke();
        fill('red');
        tint(255, 100);

        if(this.drawPosition===RUN){
            ellipse(x,y,x+(10 * scale),y+(10 * scale));
        } else if (this.drawPosition===JUMP) {
            ellipse(x,y, x+(30*scale), y+(30*scale))
        }

        ellipseMode(CENTER);
        
    }
}


