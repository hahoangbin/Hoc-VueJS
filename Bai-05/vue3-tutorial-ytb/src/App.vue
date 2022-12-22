<template>
  <h1 class="fade">Hello from vue cli =)))</h1>
  <Teleport to="body">
    <base-modal 
      v-if="isShowModal"
      title="this is new title from app component"
      content="this is content modal"
      theme="contact" 
      @cancel="onToggleModal">
  
      <label for="">Name:</label>
      <input class="inputName" type="name" />
  
    </base-modal>

  </Teleport>

  <hr>
  <button class="btn"
      @click="onToggleModal">
      toggle modal
  </button>
</template>

<script>
import BaseModal from "./components/BaseModal.vue";

export default {
  name: "App",
  components: {
    BaseModal: BaseModal,
  },
  data(){
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal
    }
  },
};
</script>

<style scoped>
  .btn {
	background-color: rgb(64, 206, 64);
	height: 28px;
	border-radius: 5px; 
  }
</style>