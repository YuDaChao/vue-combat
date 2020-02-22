<template>
  <div class="split-pane-wrapper" ref="splitPane">
    <!--  左边区域  -->
    <div class="pane pane-left" :style="leftPaneStyle">
      <slot name="left"></slot>
    </div>
    <div class="drag" :style="dragStyle" @mousedown="handleMousedown" />
    <div class="pane pane-right" :style="rightPaneStyle">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'split-pane',
  props: {
    dragWidth: {
      type: Number,
      default: 8
    },
    offset: {
      type: Number,
      default: 0.5
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      offsetWidth: 0.5,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    offsetPercent () {
      return this.offset * 100
    },
    dragStyle () {
      return {
        width: `${this.dragWidth}px`,
        left: `calc(${this.offsetPercent}% - ${this.dragWidth / 2}px)`
      }
    },
    leftPaneStyle () {
      return {
        width: `${this.offsetPercent}%`,
        'padding-right': `${this.dragWidth / 2}px`
      }
    },
    rightPaneStyle () {
      return {
        left: `calc(${this.offsetPercent}% + ${this.dragWidth / 2}px)`
      }
    }
  },
  methods: {
    handleMousedown (e) {
      this.canMove = true
      // 获取鼠标点击拖动条的偏移量
      this.initOffset = e.pageX - e.target.getBoundingClientRect().left
      // 监听move事件
      document.body.addEventListener('mousemove', this.handleMousemove)
      document.body.addEventListener('mouseup', this.handleMouseup)
    },
    handleMousemove (e) {
      if (!this.canMove) return
      const { pageX } = e
      const { width, left } = this.$refs.splitPane.getBoundingClientRect()
      const offset = pageX - left - this.initOffset + this.dragWidth / 2
      const offsetPercent = offset / width
      if (offsetPercent <= 0.1 || offsetPercent >= 0.9) return
      // this.offsetWidth = offsetPercent
      this.$emit('update:offset', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
      document.body.removeEventListener('mousemove', this.handleMousemove)
    }
  }
}
</script>

<style lang="less" scoped>
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    &-left {
      left: 0;
      background-color: #42b983;
    }
    &-right {
      right: 0;
      background-color: darkkhaki;
    }
  }
  .drag {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: chocolate;
    z-index: 10;
    user-select: none;
    cursor: col-resize;
  }
}
</style>
