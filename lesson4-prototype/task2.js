function SimpleCalculator() {
    this.read = function () {
        this.a = Number(prompt("a"));
        this.b = Number(prompt("b"));
    };
    this.sum = function (){
        return this.a+this.b
    };
    this.mult = function (){
        return this.a*this.b
    }
}

function AdvancedCalculator () {

    this.div = function(){
        return this.a/this.b;
    };
    this.pow = function(){
        return Math.pow(this.a,this.b);
    };
}


var simpleCalculator= new SimpleCalculator();
AdvancedCalculator.prototype = simpleCalculator;
var advancedCalculator = new AdvancedCalculator();
advancedCalculator.read();

console.log(advancedCalculator.sum());
console.log(advancedCalculator.mult());
console.log(advancedCalculator.div());
console.log(advancedCalculator.pow());