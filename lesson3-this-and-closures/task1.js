var calculator = {
    read:read(),
    sum:sum(),
    mult:mult()
}

function read () {
    this.a = Number(prompt("a"));
    this.b = Number(prompt("b"));
}

function sum (a,b) {
    console.log(this.a+this.b)

}

function mult () {
    console.log(this.a*this.b)
}


