const settingsTheme = document.querySelector('.settings__theme');
const settingsView = document.querySelector('.settings__view');

const clickHandler = (e) => {
  if (e.target.classList.contains('dark-theme')) {
    document.documentElement.dataset.themeName = 'dark';
    e.target.classList.add('active');
    document.querySelector('.light-theme').classList.remove('active');
  }
  if (e.target.classList.contains('light-theme')) {
    document.documentElement.dataset.themeName = 'light';
    e.target.classList.add('active');
    document.querySelector('.dark-theme').classList.remove('active');
  }
  if (e.target.classList.contains('list-view')) {
    cards.classList.add('list');
    cards.classList.remove('tiles');
    e.target.classList.add('active')
    document.querySelector('.tiles-view').classList.remove('active')
  }
  if (e.target.classList.contains('tiles-view')) {
    cards.classList.add('tiles');
    cards.classList.remove('list');
    e.target.classList.add('active')
    document.querySelector('.list-view').classList.remove('active')
  }
}

settingsTheme.addEventListener('click', clickHandler);
settingsView.addEventListener('click', clickHandler);
