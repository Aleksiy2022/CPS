'use strict'

let aboutBtn = document.querySelector('.about__btn');
let brandsListItems = document.querySelectorAll('.brands-list__item');
let brandsBtn = document.querySelector('.brands__btn');

function setupAboutBtn(btn) {
  btn.onclick = function() {
    let aboutText = document.querySelector('.about__text');
    let btnChildren = btn.children;
  
    btn.classList.toggle('btn--open');
    aboutText.classList.toggle('max-height');
  
    if (btn.classList.contains('btn--open')) {
      
      btnChildren[0].style.transform = 'rotateX(180deg)';
      btnChildren[1].textContent = 'Скрыть';
    } else {
      btnChildren[0].style.transform = 'rotateX(0deg)';
      btnChildren[1].textContent = 'Показать всё';
    }
  }
}

function setupBrandsBtn(btn) {
  btn.onclick = function () {
    brandsListElement.classList.toggle('max-height');
    btn.classList.toggle('btn--open');
    let btnChildren = btn.children;
  
    if (btn.classList.contains('btn--open')) {
      
      btnChildren[0].style.transform = 'rotateX(180deg)';
      btnChildren[1].textContent = 'Скрыть';
    } else {
      btnChildren[0].style.transform = 'rotateX(0deg)';
      btnChildren[1].textContent = 'Показать всё';
    }
  }
}

if (aboutBtn) {
  setupAboutBtn(aboutBtn);
}

if (brandsBtn) {
  setupBrandsBtn(brandsBtn);
}
