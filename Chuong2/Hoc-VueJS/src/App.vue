<template>
  <div id="app">
    <compHeader v-bind:title="title"/>
    <list-user v-bind:listUsers="listUsers"/>
    <compFooter v-bind:msg="msg"/>
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompFooter from "./components/CompFooter.vue";
import ListUser from './components/ListUser.vue';
export default {
  components: { CompHeader, CompFooter, ListUser },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Hello world, Hello VueJS!',
      listUsers: [
        {id: 1, email: 'test@example.com', active: true},
        {id: 2, email: 'test@example.com', active: true},
        {id: 3, email: 'test@example.com', active: true},
        {id: 4, email: 'test@example.com', active: true},
        {id: 5, email: 'test@example.com', active: true},
      ]
    }
  },
  
  components: { 
    CompHeader,
    CompFooter, 
    ListUser,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
