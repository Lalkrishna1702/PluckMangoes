class Tree {

    constructor(x,y,width,height){

        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("Images/tree.png");
        World.add(world, this.body);

        this.width = width;
        this.height = height;
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}