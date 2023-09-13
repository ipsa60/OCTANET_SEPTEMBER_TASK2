document.addEventListener("DOMContentLoaded", function () {
    const taskDescriptionInput = document.getElementById("taskDescription");
    const taskDeadlineInput = document.getElementById("taskDeadline");
    const taskCategoryInput = document.getElementById("taskCategory");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("tasks");

    addTaskButton.addEventListener("click", function () {
        const description = taskDescriptionInput.value;
        const deadline = taskDeadlineInput.value;
        const category = taskCategoryInput.value;

        if (description.trim() === "") {
            alert("Please enter a task description.");
            return;
        }

        const taskElement = document.createElement("li");
        taskElement.innerHTML = `
            <span>${description}</span>
            <span>Deadline: ${deadline}</span>
            <span>Category: ${category}</span>
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(taskElement);

        // Clear input fields
        taskDescriptionInput.value = "";
        taskDeadlineInput.value = "";
    });

    // Delete task when the delete button is clicked
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            const taskElement = event.target.parentElement;
            taskElement.remove();
        }
    });
});