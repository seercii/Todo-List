let addTodoButton = document.getElementById("addTodo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearTodoButton = document.getElementById("clearTodo");


addTodoButton.addEventListener("click",function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling")
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value = "";

    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    });

    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    });

    clearTodoButton.addEventListener("click",function(){
        paragraph.remove();
    })
});
console.log(addTodoButton);