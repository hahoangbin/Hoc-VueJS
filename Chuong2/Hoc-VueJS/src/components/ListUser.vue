<template>
  <div class="list-user">
    <p>{{ titleUser }}</p>
    <p>{{ title }}</p>
    <user 
    v-for="user in listUsers"
    v-bind:key="user.id"
    v-bind:user="user"/>
  </div>
</template>

<script>
import user from './User.vue'

export default {
  name: 'list-user',
  props: {
    title: String,
    listUsers: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      titleUser: 'List user component',
    }
  },

  components: {
    user
  }
}
</script>

<style>

</style>