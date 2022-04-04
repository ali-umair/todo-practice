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
        newTask.setAttribute('class', 'task');              // Adding CSS class for styling
        tasksContainer.appendChild(newTask);                // Appending new task element to tasks container
        doneButton(newTask);                                // Calling btn generator function
        removeButton(newTask);                              //          //
    }
})

function doneButton(newTask) {                              // Function to generate done button with every
    const doneButton = document.createElement('button');    // new task created,
    doneButton.textContent = "Done";
    doneButton.setAttribute('class', 'btn-done');           // Adding CSS for styling     
    doneButton.addEventListener('click', () => newTask.classList.add('line-through'))   // Adding CSS class
    newTask.appendChild(doneButton);                     // and then appending the button to new task element
}

function removeButton(newTask) {                  // Function to generate remove button with every
    const removeButton = document.createElement('button'); // new task created,
    removeButton.textContent = "Remove";
    removeButton.setAttribute('class', 'btn-remove');      // Adding CSS class for styling          
    removeButton.addEventListener('click', () => newTask.remove())  // Removing task on button click
    newTask.appendChild(removeButton);                     // and then appending the button to new task element
}