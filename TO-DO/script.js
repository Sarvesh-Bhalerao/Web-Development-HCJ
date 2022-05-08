const form = document.querySelector("#form");
const ip = document.querySelector("#input");
const todosUl = document.querySelector(".todos");
const tasks = JSON.parse(localStorage.getItem("todos"));

if (tasks) {
  tasks.forEach((task) => addtodo(task));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addtodo();
});

function addtodo(task) {
  let iptask = ip.value;

  if (task) {
    iptask = task.text;
  }

  //   console.log(iptask);
  if (iptask) {
    const taskel = document.createElement("li");
    // if (task && task.completed) {
    //   taskel.classList.add("completed");
    // }

    taskel.innerText = iptask;

    taskel.addEventListener("click", () => {
      taskel.classList.toggle("completed");
      updatelocalstr();
    });

    taskel.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      taskel.remove();
      updatelocalstr();
    });

    todosUl.appendChild(taskel);
    ip.value = "";

    updatelocalstr();
  }
}

function updatelocalstr() {
  todosels = document.querySelectorAll("li");

  const todos = [];
  todosels.forEach((todosel) => {
    todos.push({
      text: todosel.innerText,
      completed: todosel.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
// localStorage.setItem("name", JSON.stringify(obj));

// JSON.parse(localStorage.getItem(obj));
