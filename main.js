const submitButton = document.querySelector('#submit');
const tasksContainer = document.querySelector('.tasks-container');
const inputTask = document.querySelector('#add-task');

submitButton.addEventListener('click', () => {
    if (inputTask.value == "") {
        return 0;
    }
})