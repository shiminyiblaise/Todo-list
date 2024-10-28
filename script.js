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
//add a delete button

const deleteBtn = document.createElement("span");
deleteBtn.innerHTML ="\u00d7";
todoItem.appendChild(deleteBtn);
}
}
// implement check and delete logic
todoList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})