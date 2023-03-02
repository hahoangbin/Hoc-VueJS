<template>
  <div>
    <p>{{ titleUser }}</p>
    <div class="list-user">
      <user
        class=""
        v-for="user in listUsers"
        v-bind:key="user.id"
        v-bind:user="user"
        v-on:deleteUser="deleteUser"
      />
    </div>
  </div>
</template>

<script>
import user from "./User.vue";

export default {
  name: "list-user",
  props: {
    title: String,
    listUsers: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      titleUser: "List User",
    }
  },

  components: {
    user,
  },

  methods: {
    deleteUser(data) {
      console.log("deleteUser", data)
      this.$emit('deleteUserEvent', data)
    }
  }
};
</script>

<style>
.list-user {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>