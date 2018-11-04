// var body = document.body;
// var el = document.createElement("div");

// el.appendChild(document.createElement("p"));
// el.firstChild.textContent = "Hello!";
// el.style.backgroundColor = "black";
// el.firstChild.style.color = "white";

// body.appendChild(el);

// setInterval(function(){ return el.style.display="none"}, 5000);

class UiComponent {
    constructor(tag,content){
       
        this.el = document.createElement(tag);
        this.el.textContent =  content;

    }
    show(parent) {
        parent.appendChild(this.el);

    }
    
}

class Button extends UiComponent {
    clickMe(){
        console.log("I'm clicked");
    }

}

var button = new Button("button","text");
button.show(document.body);
button.clickMe();