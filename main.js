const submitButton = document.querySelector('#submit');             //
const tasksContainer = document.querySelector('.tasks-container');  //  Selecting elements from the DOM
const inputTask = document.querySelector('#add-task');              //

submitButton.addEventListener('click', () => {
    if (inputTask.value == "") {                                // Adding EventListener to submit task btn
        return 0;
    }
    else {
        let newTask = document.createElement('div');        // Creating new task element
        newTask.textContent = inputTask.value;              // Assigning user created task to created element
        tasksContainer.appendChild(newTask);                // Appending new task element to tasks container
        removeButtonGenerator(newTask);                     // Calling btn generator function
    }
})

function removeButtonGenerator(newTask) {                  // Function to generate remove button with every
    const removeButton = document.createElement('button'); // new task created,
    removeButton.textContent = "Remove Task";              //  
    newTask.appendChild(removeButton);                     // and then appending the button to new task element
}