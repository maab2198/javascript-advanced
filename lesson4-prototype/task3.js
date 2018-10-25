class SimpleCalculator {
    constructor() {
        this.a = Number(prompt("a"));
        this.b = Number(prompt("b"));
    };
    sum(){
        return this.a+this.b
    };
    mult(){
        return this.a*this.b
    }
}

class AdvancedCalculator extends SimpleCalculator {

    div(){
        return this.a/this.b;
    };
    pow(){
        return Math.pow(this.a,this.b);
    };
}

var advancedCalculator = new AdvancedCalculator();

console.log(advancedCalculator.sum());
console.log(advancedCalculator.mult());
console.log(advancedCalculator.div());
console.log(advancedCalculator.pow());

console.log(advancedCalculator instanceof AdvancedCalculator);
console.log(advancedCalculator instanceof SimpleCalculator);