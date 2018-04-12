function BalloonDog() {
    const RUN = 'run';
    const JUMP = 'jump';
    const CROUCH = 'crouch';

    this.frameNumber = 0;
    this.drawPosition = RUN;


    this.draw = function(x, y, scale) {
        scale = scale || 1;                             //optional parameter which defaults to 1
        this.frameNumber++;
        
        if (!(this.frameNumber%30)){
            if (this.drawPosition === RUN){
                this.drawPosition = JUMP;
            }else{
                this.drawPosition = RUN;
            }
        }

        if(this.drawPosition===RUN){
            strokeWeight(40);
            strokeCap(ROUND);
            stroke(153,0,254,200);
            line(x-10,y+15,x+10,y+50); //far rear leg
            stroke(0,153,200);
            line(x+100,y+15,x+70,y+50); //far front leg
            stroke(255,200,0,200);
            line(x+105,y-60,x+90,y-80); //far ear
            stroke(255,0,0,200);
            line(x,y,x+80,y); //body
            stroke(255,102,0,200);
            line(x-20,y-15,x-25,y-20); //tail base
            stroke(255,103,102,200);
            line(x+110,y-15,x+120,y-40); //neck
            stroke(255,255,0,200);
            line(x-10,y+15,x+20,y+40); //near rear leg
            stroke(51,204,51,200);
            line(x+100,y+15,x+90,y+50); //near front leg
            stroke(255,50,0,200);
            line(x+110,y-60,x+100,y-80); //near ear
            stroke(255,50,150,200);
            line(x+145,y-55,x+150,y-55); //nose
            strokeWeight(10);
            stroke(255,102,0,200);
            line(x-35,y-35,x-50,y-50); //tail end
            fill(255,50,150,200);
            noStroke();
            triangle(x+168,y-55,x+175,y-62,x+175,y-48);


        } else if (this.drawPosition===JUMP) {
            ellipse(x,y,10*scale,10*scale);
        }
    }
}


