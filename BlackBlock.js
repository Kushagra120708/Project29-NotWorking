class BlackBlock extends Block{
    constructor(x, y) {
        super(x,y,40,55)
    }
    display() {
     fill(128,128,128);
     super.display();
    }
}