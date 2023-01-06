const wrapper = document.querySelector('.cards');

const likeHandler = (e) => {
  e.target.closest('.cards__btn')?.classList.toggle('cards__btn--liked');
}

wrapper.addEventListener('click', likeHandler);
