<template>
  <div class="user">
    <h5>{{ user.email }}</h5>
    <button class="delete" v-on:click="handleDelete">Delete</button>
  </div>

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
  },
  methods: {
    handleDelete(e) {
      var data = {
        id: this.user.id
      }
      console.log('handleDelete trong User.vue')

      this.$emit('deleteUser', data)
    }
  }
}
</script>

<style>
.user {
  position: relative;
  border: 1px solid #333;
  width: 25%;
  height: 86px;
  margin: 20px;
  line-height: 40px;
}

.user .delete {
  position: absolute;
  top: 0;
  right: 0;
}
</style>