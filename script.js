const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');

async function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
    await simulateAsyncTask();

    console.log(`Task "${taskText}" added.`);
}
function simulateAsyncTask() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000); 
    });
}
addTaskButton.addEventListener('click', addTask);
