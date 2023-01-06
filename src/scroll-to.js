const scrollBtn = document.querySelector('.scroll');

const handleScroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 1) {
    scrollBtn.classList.remove('visually-hidden');
  }
  else {
    scrollBtn.classList.add('visually-hidden')
  }
};

let previousCoordinates = 0;

const scrollTo = () => {
  if (Math.floor(window.pageYOffset) === 2) {
    window.scrollTo({
      top: previousCoordinates,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({top: 2, behavior: 'smooth'});
  }
  previousCoordinates = window.pageYOffset;
}

window.addEventListener('scroll', handleScroll);
scrollBtn.addEventListener('click', scrollTo)




