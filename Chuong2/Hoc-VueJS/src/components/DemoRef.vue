<template>
  <div class="demo-ref">
    <h1>DemoRef</h1>
    <button 
    class="avatar"
    v-on:click="handleClickInputFile">
    thay doi data</button>

    <input 
    type="file" 
    style="display: none;"
    ref="fileInput"  >
  </div>

</template>

<script>
export default {
  name: "Demo-ref",
  data: {
    return: {

    }
  },

  methods: {
    handleClickInputFile(e) {
      this.$refs.fileInput.click();
      console.log(this)
    }
  }
}
</script>

<style>
.demo-ref {
  margin: 100px;
  padding: 60px 20px;
  border: 1px solid #e3d3d3;
  border-radius: 10px;
}

.avatar {
  padding: 12px;
  background: #18c726;
  color: aliceblue;
  font-size: 20px;
  border-radius: 6px;
  transition: all .3s ease;
}

.avatar:hover {
  background: #0e63b3;
}
</style>