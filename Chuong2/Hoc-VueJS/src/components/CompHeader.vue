<template>
  <header>
    <h1>{{ text }}</h1>
    <h2>{{ title }}</h2>
    <p>{{ msg }}</p>
    <button v-on:click="changeTitleHeader">Thay đổi title từ compHeader.vue</button>
    <ul>
      <li v-for="user in listUsers" v-bind:key="user.id">{{ user.email }}</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'comp-header',
  props: {
    title: String,
    msg: String,
    listUsers: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      text: 'Header',
    }
  },

  methods: {
    changeTitleHeader(data) {
      var data = {
        msgsss: 'Toi lam duoc roi'
      }

      this.$emit('changeTitleEvent', data)
    }
  }
}
</script>

<style>

</style>