'use strict'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let brandBoxElement = document.querySelector('.brands-box')
let brandsListItems = document.querySelectorAll('.brands-list__item')
let brandsListElement = document.querySelector('.brands-list')
let brandsBtn = document.querySelector('.brands__btn')
let init = true
let swiper

export function swiperCard() {
  if (window.innerWidth < 768) {
    if (init) {
      init = true
      brandBoxElement.classList.add('swiper')
      brandsListElement.classList.add('swiper-wrapper')
      brandsBtn.classList.add('btn--hidden')

      for (let brandItem of brandsListItems) {
        brandItem.classList.add('swiper-slide')
      }

      swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 1.25
      })
    }
  } else if (!init) {
    swiper.destroy()
    init = false
    brandBoxElement.classList.remove('swiper')
    brandsListElement.classList.remove('swiper-wrapper')
    brandsBtn.classList.remove('btn--hidden')

    for (let brandItem of brandsListItems) {
      brandItem.classList.remove('swiper-slide')
    }
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)
