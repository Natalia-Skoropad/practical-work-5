import { refs } from './refs';

export function renderTasks(tasks) {
  const markup = tasks
    .map(
      ({ taskName, taskDescription, taskID }) =>
        `<li class="task-list-item">
            <button class="task-list-item-btn" data-id=${taskID}>Delete</button>
            <h3>${taskName}</h3>
            <p>${taskDescription}</p>
        </li>`
    )
    .join('');

  refs.taskList.innerHTML = markup;
}
