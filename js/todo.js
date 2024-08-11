const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input"); 아래와 같은 내용을 불러옴 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";               // Input box을 비움 
    paintToDo(newTodo);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo;                              // span안에 파라미터로 받은 value를 저장
    button.innerText = "❌";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);               // li안에 span이 존재하도록 추가
    li.appendChild(button);           // li안에 button이 존재하도록 추가
    toDoList.appendChild(li);            // toDoList에추가
}

function deleteToDo(event) {
    // 1. this 이용
    // console.log(this);           호출한 button을 뜻함
    // this.parentNode.remove();

    // 2. target.parentElement 이용
    const li = event.target.parentElement;        // 클릭된 현재 요소의 부모 요소를 뜻함
    li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
