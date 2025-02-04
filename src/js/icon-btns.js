let iconBtns = document.querySelectorAll('.icon-btn')
let page = document.querySelector('.page')
let burgerMenu = document.querySelector('.menu')
let callbackForm = document.querySelector('.callback-form')
let orderCallForm = document.querySelector('.order-call-form')
let elementHidesPage = document.createElement('div')
page.prepend(elementHidesPage)

elementHidesPage.addEventListener('click', function () {
  elementHidesPage.classList.remove('page__content--hidden')
  burgerMenu.classList.remove('menu--open')
  callbackForm.classList.remove('form--open')
  orderCallForm.classList.remove('form--open')
})

function hiddenPage() {
  elementHidesPage.classList.toggle('page__content--hidden')
}

function changeElementState(element, btn) {
  if (element.classList.contains('menu')) {
    element.classList.toggle('menu--open')
  } else if (element.classList.contains('callback-form')) {
    if (btn.classList.contains('icon-btn--menu') && window.innerWidth < 1440) {
      burgerMenu.classList.toggle('menu--open')
      element.classList.toggle('form--open')
      return
    } else {
      element.classList.toggle('form--open')
    }
  } else if (element.classList.contains('order-call-form')) {
    if (btn.classList.contains('icon-btn--menu') && window.innerWidth < 1440) {
      burgerMenu.classList.toggle('menu--open')
      element.classList.toggle('form--open')
      return
    } else {
      element.classList.toggle('form--open')
    }
  }

  if (btn.classList.contains('menu__icon')) {
    element.classList.toggle('menu--open')
  } else {
    hiddenPage()
  }
}

function setIconBtnEvent(btn) {
  btn.addEventListener('click', {
    handleEvent(evt) {
      let curBtn = evt.currentTarget
      if (curBtn.classList.contains('menu-btn')) {
        changeElementState(burgerMenu, curBtn)
      } else if (curBtn.classList.contains('callback-btn')) {
        changeElementState(callbackForm, curBtn)
      } else if (curBtn.classList.contains('order-call-btn')) {
        changeElementState(orderCallForm, curBtn)
      }
    }
  })
}

for (let btn of iconBtns) {
  setIconBtnEvent(btn)
}
