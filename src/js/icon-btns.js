let iconBtns = document.querySelectorAll('.icon-btn')
let page = document.querySelector('.page')
let elementHidesPage = document.createElement('div')
page.prepend(elementHidesPage)

function hiddenPage() {
  elementHidesPage.classList.toggle('page__content--hidden')
}

function changeElementState(element) {
  if (element.classList.contains('menu')) {
    element.classList.toggle('menu--open')
  }
  hiddenPage()
}

function setIconBtnEvent(btn) {
  btn.addEventListener('click', {
    handleEvent(evt) {
      let curBtn = evt.currentTarget
      if (curBtn.classList.contains('menu-btn')) {
        let element = document.querySelector('.menu')
        changeElementState(element)
      }
    }
  })
}

for (let btn of iconBtns) {
  setIconBtnEvent(btn)
}
