<template>
  <div id="app">
    <h1>vue-accessible-star-rating</h1>
    <span>Rating:</span>
    <code>{{ rating }}</code>
    <section>
      <h2>Default usage</h2>
      <vue-accessible-star-rating v-model="rating" id="foo" label="Rating"></vue-accessible-star-rating>
    </section>
    <section>
      <h2>With slots</h2>
      <vue-accessible-star-rating v-model="rating" id="bar" :colored="false"  label="Rating">
        <template v-slot:star>
          <vue-svg></vue-svg>
        </template>
        <template v-slot:active>
          <angular-svg></angular-svg>
        </template>
      </vue-accessible-star-rating>
    </section>
    <section>
      <h2>Disabled</h2>
      <vue-accessible-star-rating v-model="rating" id="baz"  label="Rating" disabled></vue-accessible-star-rating>
    </section>
    <section>
      <h2>Readonly</h2>
      <vue-accessible-star-rating v-model="rating" id="js" label="Rating" readonly></vue-accessible-star-rating>
    </section>
  </div>
</template>

<script>
import VueSvg from './assets/vue.svg'
import AngularSvg from './assets/angular.svg'

export default {
  name: 'App',
  components: {
    VueSvg,
    AngularSvg,
  },
  data() {
    return {
      rating: 0,
    }
  },
}
</script>

<style lang="scss">
@import '../src/styles/core.scss';
@import '../src/styles/themes/default.scss';

html {
  font-family: sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

// bulma styles
code {
  padding: 0.25em 0.5em 0.25em;
  background-color: #f5f5f5;
  color: #ff3860;
  font-size: 0.875em;
}
</style>
