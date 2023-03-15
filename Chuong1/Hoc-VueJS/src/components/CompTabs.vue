<template>
  <div class="component-tab">
    <div class="tab-title">
      <span>{{ title }}</span>
      <i class="icon ion-md-heart"></i>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comp-tabs",

  props: {
    title: String,
  },

  Data() {
    return {};
  },
};
</script>

<style>
.tab-title {
  padding: 15px 26px;
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
}

.tabs-header {
  margin: 0;
  display: flex;
  padding: 0;
  list-style-type: none;
}

.tabs-header li {
  padding: 9px 26px;
  margin: 6px;
  color: rgb(206, 78, 4);
  border: #c2bf11 8px solid;
  border-radius: 6px;
}

.tab-content {
  padding: 20px;
  border: 2px solid #0b44df;
  height: 660px;
}

.active {
  background: #20c211;
}
</style>