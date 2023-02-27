<template>
  <header>
    <h1>{{ text }}</h1>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'comp-header',
  props: {
    title: String
  },
  data() {
    return {
      text: 'Header',
    }
  }
}
</script>

<style>

</style>