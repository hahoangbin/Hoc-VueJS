<template>
  <div class="list-user">
    <p>List user component</p>
    <user />
    <user />
    <user />
  </div>
</template>

<script>
import user from './User.vue'

export default {
  name: 'list-user',
  data() {
    return {}
  },

  components: {
    user
  }
}
</script>

<style>

</style>