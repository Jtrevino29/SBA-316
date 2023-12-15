const input = document.getElementById("input");
const Lists = document.querySelector("#Lists");

function addTask() {
    if (input.value === '') {
    alert('Need to add a Task!'); // If no input has been given
    }
    // li created when a task is added and is appended to the lists variable 
    // span appended to parent li for our x button
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        Lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    save();
}

// listener for the click on the add task button and check can be toggled
// else if - allows us to remove li element 
Lists.addEventListener("click", function(addTask) {
    if (addTask.target.tagName === "LI") {
        addTask.target.classList.toggle("checked");
        save();
    }
    else if (addTask.target.tagName === "SPAN") {
        addTask.target.parentElement.remove();
        save();
    }
}, false)

// decided to give this a try, trying to save the task list even on a refresh - this should work for the tasks completed and should save all current tasks even if they are checked. 
function save() {
    localStorage.setItem("data", Lists.innerHTML);
}

function show() {
    Lists.innerHTML = localStorage.getItem("data");
}

show();

