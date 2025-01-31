let navLinks = document.querySelectorAll('.main-nav__link')

function removeActiveClass(links) {
  for (let link of links) {
    if (link.classList.contains('main-nav__link--active')) {
      link.classList.remove('main-nav__link--active')
    }
  }
}

function setLinkClickEvent(link) {
  link.addEventListener('click', function (evt) {
    let curLink = evt.currentTarget
    removeActiveClass(navLinks)
    curLink.classList.add('main-nav__link--active')
  })
}

for (let link of navLinks) {
  setLinkClickEvent(link)
}
