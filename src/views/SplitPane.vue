<template>
  <div class="split-pane">
    <split-pane :offset.sync="offset">
      <p slot="left">left</p>
      <p slot="right">right</p>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '@/components/split-pane'
export default {
  name: 'SplitPaneDemo',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.6
    }
  }
}
</script>

<style lang="less" scoped>
.split-pane {
  width: 400px;
  height: 200px;
  margin: 0 auto;
}
</style>
