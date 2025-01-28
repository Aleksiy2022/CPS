let init = true;
let swiper;
const brandBoxElement = document.querySelector('.brands-box');
const brandsListElement = document.querySelector('.brands-list');
const brandsListItems = document.querySelectorAll('.brands-list__item');
const brandsBtn = document.querySelector('.brands__btn');
const aboutBtn = document.querySelector('.about__btn');

aboutBtn.onclick = function() {
  let aboutText = document.querySelector('.about__text');
  let btnChildren = aboutBtn.children;

  aboutText.classList.toggle('max-height');
  aboutBtn.classList.toggle('btn--open');

  if (aboutBtn.classList.contains('btn--open')) {
    
    btnChildren[0].style.transform = 'rotateX(180deg)';
    btnChildren[1].textContent = 'Скрыть';
  } else {
    btnChildren[0].style.transform = 'rotateX(0deg)';
    btnChildren[1].textContent = 'Показать всё';
  }

}

brandsBtn.onclick = function () {
  brandsListElement.classList.toggle('max-height');
  brandsBtn.classList.toggle('btn--open');
  let btnChildren = brandsBtn.children;

  if (brandsBtn.classList.contains('btn--open')) {
    
    btnChildren[0].style.transform = 'rotateX(180deg)';
    btnChildren[1].textContent = 'Скрыть';
  } else {
    btnChildren[0].style.transform = 'rotateX(0deg)';
    btnChildren[1].textContent = 'Показать всё';
  }
}

function swiperCard() {
  if (window.innerWidth < 768) {
    if (init) {
      init = true;
      brandBoxElement.classList.add('swiper');
      brandsListElement.classList.add('swiper-wrapper');
      brandsBtn.classList.add('btn--hidden');

      for (let brandItem of brandsListItems) {
        brandItem.classList.add('swiper-slide');
      }

      swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1.25,
      });
    }
  } else if (!init) {
    swiper.destroy();
    init = false; 
    brandBoxElement.classList.remove('swiper');
    brandsListElement.classList.remove('swiper-wrapper');
    brandsBtn.classList.remove('btn--hidden');

    for (let brandItem of brandsListItems) {
      brandItem.classList.remove('swiper-slide');
    }

  }
}
swiperCard();
window.addEventListener("resize", swiperCard);


