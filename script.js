const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCount = document.getElementById('taskCount');
let counter = localStorage.getItem('counter') || 0;

taskCount.textContent = counter;

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);

        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        listItem.appendChild(deleteButton);

        counter++;
        taskCount.textContent = counter;

        localStorage.setItem('counter', counter);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        counter--;
        taskCount.textContent = counter;
        localStorage.setItem('counter', counter);
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("counter", taskCount.textContent);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
    taskCount.textContent = localStorage.getItem('counter');
}

showTasks();
