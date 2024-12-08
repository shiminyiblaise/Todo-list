const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

function addTask(){
    const text = todoInput.value;
    if(text === ""){
        alert("please enter some items");
    }
    else{
const todoItem = document.createElement("li");
todoItem.innerHTML= text;
todoList.appendChild(todoItem);
    }
}