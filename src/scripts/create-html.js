const cats = [
  {
    name: "Звёздочка",
    img: "https://source.unsplash.com/yMSecCHsIBc/700x700",
    about: "Люблю покушать рыбки и завалиться спать"
  },
  {
    name: "Василиса",
    img: "https://source.unsplash.com/rW-I87aPY5Y/700x700",
    about: "Лучше меня не найдешь!!!"
  },
  {
    name: "Мурка",
    img: "https://source.unsplash.com/pdALzg0yN-8/700x700",
    about: "Предпочитаю спать на твоей подушке"
  },
  {
    name: "Барсик",
    img: "https://source.unsplash.com/ASuILqlmrRQ/700x700",
    about:
      "Буду проводить свое свободное время подальше от тебя и смотреть с презрением"
  },
  {
    name: "Тима",
    img: "https://source.unsplash.com/CEx86maLUSc/700x700",
    about: "Избавлю тебя от лишних вещей, шторы - это буржуазные излишества"
  },
  {
    name: "Мося",
    img: "https://source.unsplash.com/yJozLVBxNA0/700x700",
    about: "Люблю, чтобы меня гладили"
  },
  {
    name: "Царапка",
    img: "https://source.unsplash.com/NodtnCsLdTE/700x700",
    about: "Не люблю, чтобы меня гладили"
  },
  {
    name: "Арнольд",
    img: "https://source.unsplash.com/U6u_A5z6mME/700x700",
    about: "Гуляю сам по себе"
  }
];

const cards = document.querySelector('.cards');

const cardItems = cats.map(({name, img, about}) => {
  return `<li class="cards__item">
   <img class="cards__img" src='${img}' alt='Кот по имени ${name}' draggable="false" >
   <button class="cards__btn" aria-label="Нравится!">
   <svg class="cards__like" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512"><g><path xmlns="http://www.w3.org/2000/svg" d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z" fill="currentColor"></path></g></svg>
   </button>
   <div class="cards__info">
     <h2 class="cards__name">${name}</h2>
     <p class="cards__about">${about}</p>
   </div>
  </li>`;
}).join('');

cards.insertAdjacentHTML('afterbegin', cardItems);
