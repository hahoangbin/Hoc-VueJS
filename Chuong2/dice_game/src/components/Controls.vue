<template>
  <div class="wrapper-control">
    <button class="control btn-new" @click="newGame">
      <i class="ion-ios-plus-outline"></i>New game
    </button>
    <button class="control btn-roll" @click="rollDice">
      <i class="ion-ios-loop"></i>Roll dice
    </button>
    <button class="control btn-hold" @click="$emit('handleHoldScore')">
      <i class="ion-ios-download-outline"></i>Hold
    </button>

    <!-- <input
      v-model="valueDemo"
      type="number"
      placeholder="Final score"
      class="final-score"
    /> -->
    <input
      v-bind:value="finalScore"
      v-bind:disabled="isPlaying"
      v-on:input="$emit('handleChangeFinalScore', $event)"
      type="number"
      placeholder="Final score"
      class="final-score"
    />
  </div>
</template>

<script>
export default {
  name: 'controls',
  props: {
    finalScore: {type: [Number, String], default: 100},
    isPlaying: {type: Boolean, default: false}
  },
  data () {
    return {
      valueDemo: 100
    }
  },
  methods: {
    newGame () {
      console.log('newGame Controls.vue')
      // kich hoat su kien handleNewGame cua App truyen vao
      this.$emit('handleNewGame')
    },
    rollDice () {
      console.log('rollDice')
      this.$emit('handleRollDice')
    }
    // handleInput (e) {
    //   console.log(e.target.value)
    //   this.valueDemo = e.target.value
    // }
  }
}
</script>

<style>
/**********************************************
*** Control
**********************************************/
.control {
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  background: none;
  border: none;
  font-family: Lato;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  transition: background-color 0.3s, color 0.3s;
}
.control.disable {
  pointer-events: none;
}

.control:hover {
  font-weight: 600;
}
.control:hover i {
  margin-right: 20px;
}

.control:focus {
  outline: none;
}

.control i {
  color: #42b983;
  display: inline-block;
  margin-right: 15px;
  font-size: 32px;
  line-height: 1;
  vertical-align: text-top;
  margin-top: -4px;
  transition: margin 0.3s;
}

.btn-new {
  top: 45px;
}
.btn-roll {
  top: 403px;
}
.btn-hold {
  top: 467px;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 520px;
  color: #555;
  font-size: 18px;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  width: 160px;
  text-transform: uppercase;
}

.final-score:focus {
  outline: none;
}
</style>
