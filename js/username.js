//1. 로그인 인풋창에서 value값 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const HelloUserName = document.querySelector("#user-name");
function onLoginButtonClick(e) {
  e.preventDefault();
  const userName = loginInput.value;
  HelloUserName.innerText = `hello, ${userName}`;
}

loginForm.addEventListener("submit", onLoginButtonClick);
