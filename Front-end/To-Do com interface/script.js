const taskInput= document.getElementById("taskInput");
const addTaskBtn= document.getElementById("addTaskBtn");
const taskList= document.getElementById("taskList");

function addTask(){
    const task= taskInput.value.trim();
    if (task === "") return;
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
    saveTasks();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        addTask();
    }
});

function saveTasks(){
    const tasks = [];
    document.querySelectorAll("li").forEach(li => tasks.push(li.textContent));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

loadTasks();
