const client = supabase.createClient('https://vhspscomjwkvdtqgpsqd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI')
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
    removeButton.addEventListener('click', () => {
        tasksContainer.removeChild(newTask);
    })                                                      // Removing task on button click
    newTask.appendChild(removeButton);                     // and then appending the button to new task element
}


// Supabase

// console.log(Supabase-js);

// const { createClient } = supabase
// const _supabase = createClient(
//     'https://vhspscomjwkvdtqgpsqd.supabase.co', 
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI'
//     )

// Both of the above method of initiating supabase are correct.

//   console.log('Supabase Instance: ', client)

//   console.log(supabase);

// console.log(client);
// Authorization token: sbp_62b85233c90b9dac211d5f27fd239ce5dc93e7fe