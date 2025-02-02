'use strict'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let init = false

export function swiperCardOffers() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      new Swiper('.offers__swiper', {
        loop: true,
        enabled: true,
        breakpoints: {
          768: {
            enabled: false
          }
        },
        pagination: {
          el: '.offers__pagination',
          clickable: true
        },
        slidesPerView: 1.18,
        spaceBetween: 16
      })
    }
  } else {
    init = false
  }
}

swiperCardOffers()
