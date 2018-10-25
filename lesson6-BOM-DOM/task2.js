class Scroller {
    constructor(initialPosition) {
        this.position = initialPosition
    }
    goTop () {
        document.documentElement.scrollTo(0, 0);
        this.position = 0;
        console.log(this.position)
    }
    goBottom() {
        document.documentElement.scroll(0,document.documentElement.scrollHeight)
        this.position = 1;
        console.log(this.position)
    }
    goReverse() {
        switch (this.position) {
            case 0:
                this.goBottom() 
            break;
        
            case 1:
                this.goTop() 
            break;
          }
    }
}

var scroll = new Scroller(0); //0 = top 

