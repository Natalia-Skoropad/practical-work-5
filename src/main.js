import { onDeleteTask, onTaskFormSubmit } from './js/hendlers';
import { refs } from './js/refs';

refs.taskForm.addEventListener('submit', onTaskFormSubmit);
refs.taskList.addEventListener('click', onDeleteTask);

const themeToggle = document.querySelector('.theme-toggle-button');
const content = document.querySelector('.theme-dark');
const themeKey = 'theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    content.classList.add('theme-dark');
    content.classList.remove('theme-light');
  } else {
    content.classList.add('theme-light');
    content.classList.remove('theme-dark');
  }
}

const savedTheme = localStorage.getItem(themeKey);

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  // Якщо тема не збережена, застосовуємо світлу тему за замовчуванням
  applyTheme('light');
}

// Обробник події для кнопки перемикання теми
themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem(themeKey) || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  applyTheme(newTheme);
  localStorage.setItem(themeKey, newTheme);
});

/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
