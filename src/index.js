import VueAccessibleStarRating from './components/VueAccessibleStarRating/VueAccessibleStarRating.vue'

const Plugin = {
  install(Vue) {
    // Make sure that plugin can be installed only once
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component('VueAccessibleStarRating', VueAccessibleStarRating)
  },
}

export default Plugin

export { VueAccessibleStarRating }
