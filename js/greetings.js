const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 String은 변수로 세팅하기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();             // 기본 동작 : form이 제출되는 것을 막음

  loginForm.classList.add(HIDDEN_CLASSNAME);      //  hidden class 추가

  const username = loginInput.value;
  // Key : Value값으로 Local Storage에 저장
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;     // h1에 추가
  greeting.classList.remove(HIDDEN_CLASSNAME);    //  hidden class 삭제(h1 보이게 하기)
}

//

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {    // local Storage에 저장된 값이 없을 때
  loginForm.classList.remove(HIDDEN_CLASSNAME);   // hidden class 삭제(form 보이게 하기)
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {      // 저장된 값이 있다면
  paintGreeting(savedUsername);
}