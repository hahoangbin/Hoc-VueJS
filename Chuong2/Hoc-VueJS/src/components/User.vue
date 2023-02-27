<template>
  <div>{{ user.email }}</div>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      name: 'user'
    }
  }
}
</script>

<style>

</style>