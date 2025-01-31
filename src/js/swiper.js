'use strict'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let brandsBtn = document.querySelector('.brands__btn')
let technicalBtn = document.querySelector('.technical__btn')
let init = false

export function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      console.log(!init)
      init = true
      brandsBtn.classList.add('btn--hidden')
      technicalBtn.classList.add('btn--hidden')
      new Swiper('.swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 1.25
      })
    }
  } else {
    init = false
    brandsBtn.classList.remove('btn--hidden')
    technicalBtn.classList.remove('btn--hidden')
  }
}

swiperCard()
