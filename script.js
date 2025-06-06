const input = document.getElementById("task-input");
const button = document.getElementById("add-button");
const list = document.getElementById("task-list");

button.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});
