document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = event.target.querySelector('input[name="new-task-description"]');
    const task = taskInput.value;

    buildToDo(task);

    event.target.reset();
  });
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const taskList = document.querySelector("#tasks");
  taskList.appendChild(li);
}
