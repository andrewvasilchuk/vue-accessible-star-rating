<script>
import { mergeData } from 'vue-functional-data-merge'

import StarOutline from '../../assets/star--outline.svg'
import StarPaint from '../../assets/star--paint.svg'

export default {
  name: 'VueAccessibleStarRating',
  functional: true,
  props: {
    value: {
      type: Number,
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
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
  },
  render(h, { props, slots, data, listeners }) {
    // remove native event listener
    delete data.on

    const { value, id, max, colored, label, disabled, readonly } = props

    const { star, active } = slots()

    const componentData = {
      staticClass: 'v-star-rating',
      class: {
        'v-star-rating--colored': colored,
        'v-star-rating--disabled': disabled,
        'v-star-rating--readonly': disabled,
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
            disabled: disabled || readonly,
            'aria-label': i,
          },
          on: {
            input: () => {
              if (listeners.input) {
                listeners.input(i)
              }
            },
            change: () => {
              if (listeners.change) {
                listeners.change(i)
              }
            },
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
