<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'comp-footer',
  props: {
    msg: String
  },
  data() {
    return {
      textFooter: 'Hello Footer',
    }
  }
}
</script>

<style>

</style>