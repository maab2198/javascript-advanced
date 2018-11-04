//1. Найти все элементы с CSS классом btn-style и задать им зеленый цвет фона

var btn = document.getElementsByClassName("btn-style");

for (var a = 0; a < btn.length; a++){
    btn[a].style = "background: green";
}
//2. Найти элемент с айди background

console.log(document.getElementById("background"))



//3. Найди Del кнопку

var del = document.querySelectorAll("#delete");

for(var d = 0; d < del.length; d++) {
  
    if(del[d].textContent == "Del")
    console.log(del[d]);
}

//4. Найти все кнопки
console.log(document.getElementsByTagName("button"))