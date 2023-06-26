//1. 로그인 인풋창에서 value값 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const HelloUserName = document.querySelector("#user-name");
const HIDDEN_CLASSNAME = "hidden";

function onLoginButtonClick(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  HelloUserName.innerText = `hello, ${userName}`;
  HelloUserName.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginButtonClick);
