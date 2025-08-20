import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { nanoid } from 'nanoid';
import { renderTasks } from './render-tasks';
/* import { getFormLocalStorage } from './local-storage-api';
import { STORAGE_KEYS } from './constants'; 

let tasks = getFormLocalStorage(STORAGE_KEYS.TASKS) || []; */

let tasks = [];

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');

  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks(tasks);
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function onTaskFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();

  if (!taskNameValue || !taskDescriptionValue) {
    iziToast.error({
      title: 'Error',
      message: `Fields must be filled in`,
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }

  const task = {
    taskID: nanoid(),
    taskName: taskNameValue,
    taskDescription: taskDescriptionValue,
  };

  tasks.push(task);
  saveTasks();
  renderTasks(tasks);
  event.target.reset();
}

export function onDeleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const taskID = event.target.dataset.id;
  tasks = tasks.filter(task => task.taskID !== taskID);
  saveTasks();
  renderTasks(tasks);
}

loadTasks();
