function BalloonDog() {
    const RUN = 'run';
    const JUMP = 'jump';
    const CROUCH = 'crouch';

    this.frameNumber = 0;
    this.drawPosition = RUN;


    this.draw = function(x, y, scale) {
        scale = scale || 0.8;                             //optional parameter which defaults to 1
        this.frameNumber++;
        
        if (!(this.frameNumber%30)){
            if (this.drawPosition === RUN){
                this.drawPosition = JUMP;
            }else{
                this.drawPosition = RUN;
            }
        }

        if(this.drawPosition===RUN){
            strokeWeight(40*scale);
            strokeCap(ROUND);
            stroke(153,0,254,200);
            line(x-(10*scale),y+(15*scale),x+(10*scale),y+(50*scale)); //far rear leg
            stroke(0,153,200);
            line(x+(100*scale),y+(15*scale),x+(70*scale),y+(50*scale)); //far front leg
            stroke(255,200,0,200);
            line(x+(105*scale),y-(60*scale),x+(90*scale),y-(80*scale)); //far ear
            stroke(255,0,0,200);
            line(x,y,x+(80*scale),y); //body
            stroke(255,102,0,200);
            line(x-(20*scale),y-(15*scale),x-(25*scale),y-(20*scale)); //tail base
            stroke(255,103,102,200);
            line(x+(110*scale),y-(15*scale),x+(120*scale),y-(40*scale)); //neck
            stroke(255,255,0,200);
            line(x-(10*scale),y+(15*scale),x+(20*scale),y+(45*scale)); //near rear leg
            stroke(51,204,51,200);
            line(x+(100*scale),y+(15*scale),x+(80*scale),y+(50*scale)); //near front leg
            stroke(255,50,0,200);
            line(x+(110*scale),y-(60*scale),x+(100*scale),y-(80*scale)); //near ear
            stroke(255,50,150,200);
            line(x+(145*scale),y-(55*scale),x+(150*scale),y-(55*scale)); //nose base
            strokeWeight(10*scale);
            stroke(255,102,0,200);
            line(x-(35*scale),y-(35*scale),x-(50*scale),y-(50*scale)); //tail end
            fill(255,50,150,200);
            noStroke();
            triangle(x+(168*scale),y-(55*scale),x+(175*scale),y-(62*scale),x+(175*scale),y-(48*scale)); //nose bit


        } else if (this.drawPosition===JUMP) {
            strokeWeight(40*scale);
            strokeCap(ROUND);
            stroke(153,0,254,200);
            line(x-(10*scale),y+(15*scale),x-(40*scale),y+(50*scale)); //far rear leg
            stroke(0,153,200);
            line(x+(100*scale),y+(15*scale),x+(130*scale),y+(50*scale)); //far front leg
            stroke(255,200,0,200);
            line(x+(130*scale),y-(40*scale),x+(110*scale),y-(40*scale)); //far ear
            stroke(255,0,0,200);
            line(x,y,x+(80*scale),y); //body
            stroke(255,102,0,200);
            line(x-(20*scale),y-(15*scale),x-(25*scale),y-(15*scale)); //tail base
            stroke(255,103,102,200);
            line(x+(110*scale),y-(15*scale),x+(130*scale),y-(20*scale)); //neck
            stroke(255,255,0,200);
            line(x-(10*scale),y+(15*scale),x-(25*scale),y+(50*scale)); //near rear leg
            stroke(51,204,51,200);
            line(x+(100*scale),y+(15*scale),x+(120*scale),y+(50*scale)); //near front leg
            stroke(255,50,0,200);
            line(x+(130*scale),y-(40*scale),x+(115*scale),y-(50*scale)); //near ear
            stroke(255,50,150,200);
            line(x+(155*scale),y-(25*scale),x+(160*scale),y-(25*scale)); //nose base
            strokeWeight(10*scale);
            stroke(255,102,0,200);
            line(x-(45*scale),y-(15*scale),x-(65*scale),y-(15*scale)); //tail end
            fill(255,50,150,200);
            noStroke();
            triangle(x+(178*scale),y-(25*scale),x+(185*scale),y-(32*scale),x+(185*scale),y-(18*scale)); //nose bit            
        }
    }
}


