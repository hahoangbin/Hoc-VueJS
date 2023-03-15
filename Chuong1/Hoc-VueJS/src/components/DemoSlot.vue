<template>
  <div>
    <div>
      <h1>Demo Slot</h1>
    <slot></slot>
    </div>
    <div class="demo-slot">
      <comp-tabs title="Tieu de cua tab">
        <ul class="tabs-header">
          <li 
            v-for="(item, index) in tabHeader" 
            v-bind:key="index"
            v-on:click="setActiveTab(index)"
            v-bind:class="{ active: tabActive == index }">
            {{ item.text }}
          </li>
        </ul>
        <div class="tab-content tab1" v-if="tabActive === 0">
          <p>tab1 lorem ipsum dolor sit amet consectetur, adipisicing dlit. voluptatibus natus ex neque dicta porro libero, repellendus sapientem nihil atque ipsam quan ? ipsam, quo incidunt eaque officiis magnam dolorem placeat assumenda</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit . dignissimos quisquam quae, veniam saepe ratione earum , beatae ab voluptas, dolore perspiciatis optio architecto cu</p>
        </div>
        <div class="tab-content tab1" v-if="tabActive === 1">
          <p>tab2  natus ex neque dicta porro libero, repellendus sapientem nihil atque ipsam quan ? ipsam, quo incidunt eaque officiis magnam dolorem placeat assumenda</p>
        </div>
        <div class="tab-content tab1" v-if="tabActive === 2">
          <p>tab3 adipisicing dlit. voluptatibus natus ex neque dicta porro libero, repellendus sapientem nihil atque ipsam quan ? ipsam, quo incidunt eaque officiis magnam dolorem placeat assumenda</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit . dignissimos quisquam quae, veniam saepe ratione earum , beatae ab voluptas, dolore perspiciatis optio architecto cu</p>
        </div>
      </comp-tabs>
    </div>
  </div>
</template>

<script>
import CompTabs from './CompTabs.vue'

export default {
  components: { CompTabs },
  name: "Demo-slot",
  data() {
    return {
      tabHeader: [
        { text: "tab1" },
        { text: "tab2" },
        { text: "tab3" },
      ],
      tabActive: 0
    }
  },
  methods: {
    setActiveTab(index) {
      console.log("setActiveTab")
      this.tabActive = index
    }
  }
}
</script>

<style>
.demo-slot {
  margin: 100px;
  padding: 60px 20px;
  border: 1px solid #e3d3d3;
  border-radius: 10px;
}

.active {
  background: #cc0d0d;
}
</style>