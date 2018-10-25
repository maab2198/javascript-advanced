var calculator = {
    read:function () {
        this.a = Number(prompt("a"));
        this.b = Number(prompt("b"));
    },
    sum:function (){
        return this.a+this.b
    },
    mult:function (){
        return this.a*this.b
    }
}

var advancedCalculator = {

    div: function(){
        return this.a/this.b;
    },
    pow: function(){
        return Math.pow(this.a,this.b);
    },
    pr: function (){
        return this;
    }
}
advancedCalculator.__proto__ = calculator;

advancedCalculator.read();
console.log(advancedCalculator.sum());
console.log(advancedCalculator.mult());
console.log(advancedCalculator.pow());
console.log(advancedCalculator.div());
console.log(advancedCalculator.pr());

