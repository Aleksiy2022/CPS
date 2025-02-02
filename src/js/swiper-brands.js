'use strict'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let brandsBtn = document.querySelector('.brands__btn')
let init = false

export function swiperCardBrands() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      brandsBtn.classList.add('btn--hidden')
      new Swiper('.brands__swiper', {
        loop: true,
        enabled: true,
        breakpoints: {
          768: {
            enabled: false
          }
        },
        pagination: {
          el: '.brands__pagination',
          clickable: true
        },
        slidesPerView: 1.25,
        spaceBetween: 16
      })
    }
  } else {
    init = false
    brandsBtn.classList.remove('btn--hidden')
  }
}

swiperCardBrands()
