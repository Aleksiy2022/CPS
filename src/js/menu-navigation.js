let menuLinks = document.querySelectorAll('.menu__link')

function removeActiveClass(links) {
  for (let link of links) {
    if (link.classList.contains('menu__link--active')) {
      link.classList.remove('menu__link--active')
    }
  }
}

function setLinkClickEvent(link) {
  link.addEventListener('click', function (evt) {
    let curLink = evt.currentTarget
    removeActiveClass(menuLinks)
    curLink.classList.add('menu__link--active')
  })
}

for (let link of menuLinks) {
  setLinkClickEvent(link)
}
