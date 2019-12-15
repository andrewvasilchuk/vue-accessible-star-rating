<script>
import { mergeData } from 'vue-functional-data-merge'

import StarOutline from '../../assets/star--outline.svg'
import StarPaint from '../../assets/star--paint.svg'

export default {
  name: 'VueAccessibleStarRating',
  functional: true,
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    max: {
      type: Number,
      default: 5,
    },
    colored: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
    },
    disabled: {
      type: Boolean
    }
  },
  render(h, { props, slots, data, listeners }) {
    // remove native event listener
    delete data.on

    const { value, id, max, colored, label, disabled } = props

    const { star, active } = slots()

    const componentData = {
      staticClass: 'v-star-rating',
      class: {
        'v-star-rating--colored': colored,
        'v-star-rating--disabled': disabled
      },
      attrs: {
        id,
        role: 'group',
        'aria-label': label,
      },
    }

    const children = []

    for (let i = 0; i <= max; i++) {
      children.push(
        h('input', {
          staticClass: 'v-star-rating__input',
          attrs: {
            id: getInputId(id, i),
            type: 'radio',
            name: `v-star-rating-${id}`,
            value: i,
            disabled,
            'aria-label': i,
          },
          on: {
            change: () => listeners.input(i),
          },
        })
      )

      if (i !== 0) {
        children.push(
          h(
            'label',
            {
              staticClass: 'v-star-rating__star',
              class: {
                'v-star-rating__star--active': value >= i,
              },
              attrs: {
                for: getInputId(id, i),
              },
            },
            [value < i ? star || h(StarOutline) : active || h(StarPaint)]
          )
        )
      }
    }

    return h('div', mergeData(data, componentData), children)
  },
}

function getInputId(id, index) {
  return `star-rating-input-${id}-${index}`
}
</script>
