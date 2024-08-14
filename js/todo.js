const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input"); 아래와 같은 내용을 불러옴 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];         // 업데이트가 가능하도록 let

function saveToDos() {
    // Array를 String으로 변환해 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));       
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";               // Input box을 비움 

    const newTodoObj = {                // Object를 push하도록 준비
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);       // Array에 메세지를 저장
    paintToDo(newTodoObj);
    saveToDos();
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


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;                  // 전에 local Storage에 있는 todo가 출력되도록 복원
    parseToDos.forEach(paintToDo);       // 각각의 item에 대해서 출력
}