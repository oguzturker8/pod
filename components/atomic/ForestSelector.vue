<template>
  <div :style="[`width:${width};`]" :class="['forestSelectorWrapper']">
    <button
      :style="[`color:${color};`, `background:${background};`].join(' ')"
      :disabled="locked"
      @click="emitClick"
    >
      <div v-if="locked" class="lockedOverlay">
        <Icon :size="44" i="lock" stroke="#fff" stroke-width="2" />
      </div>
      <div
        class="percentage"
        :style="`width: ${percentage * 1.01}%;background:${background};`"
      >
        <div class="tip" :style="`background-color: ${background};`"></div>
      </div>
      <span class="slot">
        <slot />
      </span>
      <div class="fade"></div>
      <div class="text">{{ percentage }}%</div>
    </button>
  </div>
</template>

<script>
import Icon from '~/components/atomic/Icon.vue'

export default {
  components: { Icon },
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    click: {
      type: Function,
      default: () => {},
    },
    color: {
      type: String,
      default: '#fff',
    },
    background: {
      type: String,
      default: 'rgba(111, 153, 65, 1)',
    },
    percentage: {
      type: Number,
      default: 0,
    },
    locked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick() {
      this.$emit('click', this.click)
    },
  },
}
</script>

<style lang="scss">
.forestSelectorWrapper {
  &.locked {
    button {
      background: gray !important;
    }
  }

  button {
    border: 0;
    border-radius: 500px;
    position: relative;
    cursor: pointer;
    transition: 0.3s filter, 0.3s background, 0.3s -webkit-filter;
    font-size: 20pt;
    font-weight: 600;
    padding: 17pt 32pt;
    width: 90%;
    margin: 0 5% 20px;
    text-align: left;
    overflow: hidden;
    max-width: 500px;

    .lockedOverlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      line-height: 70px;
      text-align: center;
      background: rgba(0, 0, 0, 0.3);
      z-index: 4;
    }

    .percentage {
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      margin-left: -10px;
      .tip {
        left: 100%;
        top: 0;
        position: absolute;
        mask-image: url(/img/perc.svg);
        width: 16px;
        height: 100%;
        margin-left: -2px;
      }
    }

    .fade {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(255, 255, 255, 0.4);
    }

    .text {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      text-align: right;
      padding: 17pt 32pt;
      z-index: 2;
    }

    .slot {
      transition: 0.3s all;
      position: relative;
      z-index: 3;
    }

    &:hover {
      filter: brightness(1.1);
    }
  }
}
</style>
