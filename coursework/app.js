
var state = {
  todo: [{id: 1, title: "Test todo 1"}, {id: 2, title: "Test todo 2"}],
  inprogress: [],
  done: [],
  addItemToState: function(key, item) {
    this[key].push(item);
  },
  deleteItemFromState: function(key, item) {
    var index = this[key].findIndex(element => element.id === item.id);
    delete this[key][index];
  },
  moveItemToOtherPanel: function(key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  }
}

document.addEventListener('DOMContentLoaded', initBoard);

function initBoard() {
 initPanel('todo', state.todo);
 initPanel('inprogress', state.inprogress);
 initPanel('done', state.done);
//  var todoPanel = document.getElementById('todo');
//  var inprogressPanel = document.getElementById('todo');
//  var todoPanel = document.getElementById('todo');
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  todoList.forEach(todo => {
    panel.appendChild(createTodoElement(todo.id, todo.title));
  });
}

function createTodoElement(id, title) {
  var todoElement = document.createElement("span");
  todoElement.id = id;
  todoElement.draggable = true;
  todoElement.ondragstart=onDragStart;
  todoElement.textContent = title;
  return todoElement;
}