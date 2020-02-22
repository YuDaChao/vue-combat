<template>
  <div>{{ $route.params.name }}</div>
</template>

<script>
export default {
  mounted () {
    console.log('--> ', this.$route)
  }
}
</script>
