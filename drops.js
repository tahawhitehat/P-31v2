class Drops{
   constructor(x, y,r) {
        var options = {
            restitution :0.4,
            friction :0.0,
            //isStatic:true
        }
        this.Visiblity = 255;
        this.x = x;
        this.y = y;
        this.r = r;

        
        this.body = Bodies.circle(x, y,r, options);

        World.add(world, this.body);
    }
        
    update() {
            var maxDrops = 100
            var dropsArray = [];

            for (var i=0; i<maxDrops; i++){
                 dropsArray.push(new Drops(random(0,400), random(0,400),5))
            }

            for (var i=0; i<maxDrops; i++){
                
                ellipse(dropsArray[i].x, dropsArray[i].y,dropsArray[i].r, dropsArray[i].r);
            }

            for (var i=0; i<maxDrops; i++){

                var rainpos =this.body.position;
                push()
                translate(rainpos.x, rainpos.y);
                ellipseMode(CENTER)
                strokeWeight(4);
                stroke("blue");
                fill("blue");
                //ellipse(0,0,this.r, this.r);
                pop()
                if(rainpos.y > height){
                 Matter.body.setPosition(rainpos.x, rainpos.y , {x:random(0,400), y:random(0,400)})
            }

 
        }

    }
} 