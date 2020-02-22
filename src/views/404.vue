<template>
  <div>404-{{ $route.params.pathMatch }}</div>
</template>

<script>
export default {
  mounted () {
    console.log('--> ', this.$route)
  }
}
</script>
