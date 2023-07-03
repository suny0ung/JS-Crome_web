const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const handleSubmit = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  console.log(todoValue);
};

todoForm.addEventListener("submit", handleSubmit);
