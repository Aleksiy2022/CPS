'use strict'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let technicalBtn = document.querySelector('.technical__btn')
let init = false

export function swiperCardTechnical() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      technicalBtn.classList.add('btn--hidden')
      new Swiper('.technical__swiper', {
        loop: true,
        enabled: true,
        breakpoints: {
          768: {
            enabled: false
          }
        },
        pagination: {
          el: '.technical__pagination',
          clickable: true
        },
        slidesPerView: 1.25,
        spaceBetween: 16
      })
    }
  } else {
    init = false
    technicalBtn.classList.remove('btn--hidden')
  }
}

swiperCardTechnical()
