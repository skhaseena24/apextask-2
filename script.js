// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error");

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        error.innerHTML = "Name is required";
        return;
    }

    if(!emailPattern.test(email)){
        error.innerHTML = "Enter valid email";
        return;
    }

    error.style.color = "green";
    error.innerHTML = "Form Submitted Successfully!";
});


// To-Do List

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="removeTask(this)">
        Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}