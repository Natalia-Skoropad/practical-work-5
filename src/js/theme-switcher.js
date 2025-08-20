/*
const body = document.querySelector('.theme-dark');
const themeToggleBtn = document.querySelector('.theme-toggle-button');

/ 1. При завантаженні сторінки перевіряємо localStorage /
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.className = savedTheme; // theme-light або theme-dark
} else {
  body.classList.add('theme-dark'); // за замовчуванням темна
}

/ 2. Обробник кліку на кнопку /
themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('theme-dark')) {
    body.classList.replace('theme-dark', 'theme-light');
    localStorage.setItem('theme', 'theme-light');
  } else {
    body.classList.replace('theme-light', 'theme-dark');
    localStorage.setItem('theme', 'theme-dark');
  }
});

*/
