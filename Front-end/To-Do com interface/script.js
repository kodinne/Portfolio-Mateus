const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteBtn);
    return li;
}

function addTask() {
    const task = taskInput.value.trim();
    if (task === "") return;

    const li = createTaskElement(task);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
    saveTasks();
}


function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
    });
}


addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});


loadTasks();
