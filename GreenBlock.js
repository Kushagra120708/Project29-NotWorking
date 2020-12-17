class GreenBlock extends Block{
    constructor(x, y) {
        super(x,y,40,55)
    }
    display() {
     fill(63,224,208);
     super.display();
    }
}