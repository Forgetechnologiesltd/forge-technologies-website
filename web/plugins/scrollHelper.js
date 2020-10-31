import Vue from 'vue'
import throttle from 'lodash/throttle'

const scrollHelper = Vue.observable({ isScrolled: false })
window.addEventListener(
  'scroll',
  throttle((e) => {
    scrollHelper.isScrolled = window.scrollY > 0
  }, 50),
  { passive: true }
)
export default ({ app }, inject) => {
  inject('scrollHelper', scrollHelper)
}
