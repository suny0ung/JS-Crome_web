const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const ulTodoList = document.querySelector(".todo-list");

const paintTodo = (todoValue) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoValue;
  ulTodoList.appendChild(li);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  paintTodo(todoValue);
};

todoForm.addEventListener("submit", handleSubmit);
