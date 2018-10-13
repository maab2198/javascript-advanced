//Есть объект «Персонаж» character:

var character = {
  step: 0,
  up: function() { // вверх
    this.step++
    return this
  },
  down: function() { // вниз
    this.step--;
    return this
  },
  showPosition: function() { // вывести текущую позицию
    this.step ;
return this
  }
};

//Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

console.log(character.up());
console.log(character.up());
console.log(character.down());
console.log(character.showPosition()); // 1

//Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

console.log(character.up().up().down().up().down().showPosition().step); // 1
//Как видно, такая запись содержит «меньше букв» и может быть более наглядной.

//Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.