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
        newTask.setAttribute('class', 'task');
        tasksContainer.appendChild(newTask);                // Appending new task element to tasks container
        doneButton(newTask);                     // Calling btn generator function
        removeButton(newTask);
    }
})

function doneButton(newTask) {                  // Function to generate remove button with every
    const doneButton = document.createElement('button'); // new task created,
    doneButton.textContent = "Done";
    doneButton.setAttribute('class', 'btn-done');                
    doneButton.addEventListener('click', () => newTask.classList.add('line-through'))
    newTask.appendChild(doneButton);                     // and then appending the button to new task element
}

function removeButton(newTask) {                  // Function to generate remove button with every
    const removeButton = document.createElement('button'); // new task created,
    removeButton.textContent = "Remove";
    removeButton.setAttribute('class', 'btn-remove');                
    removeButton.addEventListener('click', () => newTask.remove())
    newTask.appendChild(removeButton);                     // and then appending the button to new task element
}