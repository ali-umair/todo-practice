const submitButton = document.querySelector('#submit');             //
const tasksContainer = document.querySelector('#container');  //  Selecting elements from the DOM
const inputTask = document.querySelector('#add-task');              //


function add(target) {
    if (inputTask.value != "") {
        tasksContainer.innerHTML += `<div id="task" class="p-3 border-b-2 flex justify-between w-96">
    <p class="w-4/5">${inputTask.value}</p>
    <div class="flex space-x-2 h-8 w-1/5">
        <button class="bg-green-500 p-2 rounded-xl hover:bg-green-700"><img class="h-4" src="./edit.svg" alt="edit"></button>
        <button onclick="remove(this)" class="bg-red-500 p-2 rounded-xl hover:bg-red-700"><img class="h-4" src="./trash.svg" alt="delete"></button>
    </div>
</div>`;
    }
    else alert("Task field is empty");
}

function remove (target) {
    // console.log(target.parentNode.parentNode);
    target.parentNode.parentNode.remove();
}


function login() {
    const modal = document.querySelector('#login');
    modal.showModal();
}

function register() {
    const modal = document.querySelector('#register');
    modal.showModal();
}

function closeModal(target) {
    // const modal = document.querySelector('#login');
    target.parentNode.close();
}