//1. 로그인 인풋창에서 value값 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const HelloUserName = document.querySelector("#user-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function showUserName(userName) {
  HelloUserName.classList.remove(HIDDEN_CLASSNAME);
  HelloUserName.innerText = `hello, ${userName}`;
}

function onLoginButtonClick(e) {
  e.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showUserName(userName);
  localStorage.setItem(USERNAME_KEY, userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginButtonClick);
} else {
  showUserName(savedUserName);
}
