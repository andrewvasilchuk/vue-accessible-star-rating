# vue-accessible-star-rating

> Vue.js accessible star rating component.

## Table of contents

- [vue-accessible-star-rating](#vue-accessible-star-rating)
  - [Table of contents](#table-of-contents)
  - [Demo](#demo)
  - [Installation](#installation)
    - [Via NPM](#via-npm)
    - [Via Yarn](#via-yarn)
  - [Initialization](#initialization)
    - [As a plugin](#as-a-plugin)
    - [As a global component](#as-a-global-component)
    - [As a local component](#as-a-local-component)
  - [Usage](#usage)
    - [Template](#template)
    - [Script](#script)
    - [Styles](#styles)
    - [API](#api)
      - [Props](#props)
      - [Slots](#slots)
        - [Example of possible usage of `slots`](#example-of-possible-usage-of-slots)
  - [Development](#development)
  - [Build](#build)
  - [Powered by](#powered-by)
  - [License](#license)

## Demo

[![Edit vue-accessible-star-rating](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-m44vc?fontsize=14)

## Installation

### Via NPM

```bash
$ npm install vue-accessible-star-rating --save
```

### Via Yarn

```bash
$ yarn add vue-accessible-star-rating
```

## Initialization

### As a plugin

It must be called before `new Vue()`.

```js
import Vue from 'vue'
import VueAccessibleStarRating from 'vue-accessible-star-rating'

Vue.use(VueAccessibleStarRating)
```

### As a global component

```js
import Vue from 'vue'
import { VueAccessibleStarRating } from 'vue-accessible-star-rating'

Vue.component('VueAccessibleStarRating', VueAccessibleStarRating)
```

### As a local component

```js
import { VueAccessibleStarRating } from 'vue-accessible-star-rating'

export default {
  name: 'YourAwesomeComponent',
  components: {
    VueAccessibleStarRating,
  },
}
```

## Usage

### Template

```html
<template>
  <vue-accessible-star-rating
    v-model="rating"
    id="foo"
    label="Rating"
  ></vue-accessible-star-rating>
</template>
```

### Script

```js
export default {
  // ...
  data() {
    return {
      rating: 0,
    }
  },
  // ...
}
```

### Styles

After that don't forget to include core styles. Note that library is sipped with default theme styles you can use.

`SASS`:

```scss
// recommended
@import 'vue-accessible-star-rating/src/styles/core.scss';

// optional
@import 'vue-accessible-star-rating/src/styles/themes/default.scss';
```

Or already compiled `CSS`:

```css
/* recommended */
@import 'vue-accessible-star-rating/dist/styles/core.scss';

/* optional */
@import 'vue-accessible-star-rating/dist/styles/themes/default.scss';
```

> ⚠️ Note! When you import already compiled CSS you don't have ability to override `SASS` variables during build process, so it is preferable to use `.scss` file.

`core.scss`, contains some `SASS` variables you can override during build process:

```scss
$v-star-rating-star-display: flex !default;
$v-star-rating-star-size: 32px !default;
```

`/themes/default.scss` `SASS` variables are listed [here](https://github.com/andrewvasilchuk/vue-accessible-star-rating/blob/master/src/styles/themes/default.scss).

### API

#### Props

`<vue-accessible-star-rating>` accepts some `props`:

| Prop               | Description                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value: number`    | `required`. Current value (use in conjunction with `v-model`).                                                                                                                   |
| `id: string`       | `required`. Since it is a functional stateless component id does not have a `this._uid` instance property, so you have to pass it explicit. Make sure it is unique in page scope |
| `label: string`    | Value of `aria-label` attribute                                                                                                                                                  |
| `max: number`      | `default: 5` Maximum value of rating                                                                                                                                             |
| `colored: boolean` | `default: true` Whether or not to apply `v-star-rating--colored` class, which adds `fill` rules to `<svg>` elements                                                              |

#### Slots

`<vue-accessible-star-rating>` provides you with some `slots` that you can use to fit your needs.

| Slot     | Description      |
| -------- | ---------------- |
| `star`   | Star slot        |
| `active` | Active star slot |

##### Example of possible usage of `slots`

```html
<vue-accessible-star-rating
  v-model="rating"
  id="bar"
  :colored="false"
  label="Rating"
>
  <template v-slot:star
    >⚪️</template
  >
  <template v-slot:active
    >⭐️</template
  >
</vue-accessible-star-rating>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Build

1. To build production ready build simply run `npm run build`:

After successful build the following `dist` folder will be generated:

```
├── styles
│   ├── themes
│   │   ├── default.css
│   ├── core.css
├── vue-accessible-star-rating.common.js
├── vue-accessible-star-rating.esm.js
├── vue-accessible-star-rating.js
├── vue-accessible-star-rating.min.js
```

## Powered by

- `Rollup` (and plugins)
- `Babel`
- `SASS` and `node-sass`
- `PostCSS`
- `Autoprefixer`

## License

[MIT](http://opensource.org/licenses/MIT)
