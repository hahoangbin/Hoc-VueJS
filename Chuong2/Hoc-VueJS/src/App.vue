<template>
  <div id="app">
    <compHeader 
    v-bind:listUsers="listUsers"
    v-bind:title="title"
    v-bind:msg="msg"
    v-on:changeTitleEvent="handleChangeTitle"/>
    
    <button v-on:click="title = 'Xin chào! mình là tèo đây!'">Thay đổi components
    </button>
    
    <list-user 
    v-bind:listUsers="listUsers"
    v-on:deleteUserEvent="handleDeleteUser"/>

    <compFooter v-bind:msg="msg"/>

    <demo-ref></demo-ref>
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompFooter from "./components/CompFooter.vue";
import ListUser from './components/ListUser.vue';
import DemoRef from './components/DemoRef.vue';
export default {
  components: { CompHeader, CompFooter, ListUser, DemoRef },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Hello world, Hello VueJS!',
      listUsers: [
        {id: 1, email: 'test666@example.com', active: true},
        {id: 2, email: 'test222@example.com', active: true},
        {id: 3, email: 'test333@example.com', active: true},
        {id: 4, email: 'test444@example.com', active: true},
        {id: 5, email: 'test999@example.com', active: true},
      ]
    }
  },

  methods: {
    handleChangeTitle(data) {
      this.msg = data.msgsss
    },

    handleDeleteUser(data) {
      var indexDelete = -1
      this.listUsers.forEach((u, idx) => {
        console.log(u.id, idx, data.id)
        if(u.id === data.id) {
          indexDelete = idx
        }
      })

      if(indexDelete != -1) {
        var test = this.listUsers.splice(indexDelete, 1)
        console.log('phan tu bi xoa = ', test)
      }
      console.log('indexDelete sau khi chay vong for', indexDelete)
      console.log('handledeleteuser trong App.vue', data)
    }
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
