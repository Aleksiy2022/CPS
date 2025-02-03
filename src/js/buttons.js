let buttons = document.querySelectorAll('.btn')

function switcherBlockHeight(element, btn) {
  element.classList.toggle('open')
  btn.classList.toggle('btn--open')
  let text = btn.querySelector('.btn__text')
  let btnImage = btn.querySelector('.btn__image')
  btnImage.style.transform = 'rotateX(0deg)'
  if (
    text.textContent === 'Показать всё' ||
    text.textContent === 'Читать далее'
  ) {
    text.textContent = 'Скрыть'
    btnImage.style.transform = 'rotateX(180deg)'
  } else if (element.classList.contains('about__text')) {
    text.textContent = 'Читать далее'
  } else {
    text.textContent = 'Показать всё'
  }
}

function setBtnClickEvent(btn) {
  btn.addEventListener('click', {
    handleEvent(evt) {
      let block
      let curBtn = evt.currentTarget
      if (curBtn.classList.contains('about__btn')) {
        block = document.querySelector('.about__text')
      } else if (curBtn.classList.contains('brands__btn')) {
        block = document.querySelector('.brands__list')
      } else if (curBtn.classList.contains('technical__btn')) {
        block = document.querySelector('.technical__list')
      }
      switcherBlockHeight(block, curBtn)
    }
  })
}

for (let btn of buttons) {
  setBtnClickEvent(btn)
}
