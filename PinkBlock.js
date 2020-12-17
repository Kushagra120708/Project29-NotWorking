class PinkBlock extends Block{
    constructor(x, y) {
        super(x,y,40,55)
    }
    display() {
     fill(255,192,203);
     super.display();
    }
}