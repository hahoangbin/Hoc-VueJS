<template>
  <div id="app">
    <div class="wrapper clearfix">
      <!-- props -> Parent to Child -->
      <players
        v-bind:scoresPlayer="scoresPlayer"
        v-bind:activePlayer="activePlayer"
        v-bind:curentScore="curentScore" />

      <controls
        v-on:handleNewGame="handleNewGame"
        v-on:handleRollDice="handleRollDice" />

      <dices
        v-bind:dices="dices" />

      <popup-rule
        v-bind:isOpenPopup="isOpenPopup"
        v-on:handleConfirm="handleConfirm" />
    </div>
  </div>
</template>

<script>
import Players from './components/Players.vue'
import Controls from './components/Controls.vue'
import Dices from './components/Dices.vue'
import PopupRule from './components/PopupRule.vue'

export default {
  name: 'app',
  components: {
    Players,
    Controls,
    Dices,
    PopupRule
  },

  data () {
    return {
      isPlaying: false,
      activePlayer: 0, // Ai la nguoi choi hien tai?
      scoresPlayer: [ 13, 30 ],
      curentScore: 0,
      isOpenPopup: false,
      dices: [1, 6]
    }
  },

  methods: {
    handleNewGame () {
      console.log('handleNewGame App.vue')
      this.isOpenPopup = true
    },
    handleConfirm () {
      console.log('handle confirm')
      this.isOpenPopup = false
      this.isPlaying = true
      this.activePlayer = 0
      this.scoresPlayer = [0, 0]
      this.curentScore = 0
      this.dices = [1, 1]
    },
    handleRollDice () {
      console.log('handleRollDice App.vue')
      if (this.isPlaying) {
        // Math.random() chi random ra so le tu 0 -> 1
        var dice1 = Math.floor(Math.random() * 6) + 1
        var dice2 = Math.floor(Math.random() * 6) + 1
        console.log(dice1, dice2)

        this.dices = [dice1, dice2]
      } else {
        alert('Vui lòng nhấn NewGame!')
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url("assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
/* Dice */
#dice-1 {
  top: 120px;
}
#dice-2 {
  top: 250px;
}
.dice {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
}
.spinner div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 1px solid #ccc;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 120px;
  font-size: 100px;
  color: #42b983;
  font-size: 0;
  transition: all 0.3s ease;
  opacity: 1;
}

.spinner .face1 {
  -webkit-transform: translateZ(60px);
  -ms-transform: translateZ(60px);
  transform: translateZ(60px);
  background-image: url("./assets/dice-1.png");
  background-position: center;
  background-size: cover;
}
.spinner .face2 {
  -webkit-transform: rotateY(90deg) translateZ(60px);
  -ms-transform: rotateY(90deg) translateZ(60px);
  transform: rotateY(90deg) translateZ(60px);
  background-image: url("./assets/dice-2.png");
  background-position: center;
  background-size: cover;
}
.spinner .face3 {
  -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
  -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
  transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
  background-image: url("./assets/dice-3.png");
  background-position: center;
  background-size: cover;
}
.spinner .face4 {
  -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  background-image: url("./assets/dice-4.png");
  background-position: center;
  background-size: cover;
}
.spinner .face5 {
  -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  background-image: url("./assets/dice-5.png");
  background-position: center;
  background-size: cover;
}
.spinner .face6 {
  -webkit-transform: rotateX(-90deg) translateZ(60px);
  -ms-transform: rotateX(-90deg) translateZ(60px);
  transform: rotateX(-90deg) translateZ(60px);
  background-image: url("./assets/dice-6.png");
  background-position: center;
  background-size: cover;
}

.spinner {
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 60px 60px 0;
  -ms-transform-origin: 60px 60px 0;
  transform-origin: 60px 60px 0;
  -webkit-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  transition: all 0.9s ease;
  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.spinner.dice-1 {
  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.spinner.dice-2 {
  -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
}
.spinner.dice-3 {
  -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
}
.spinner.dice-4 {
  -webkit-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  -ms-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  -o-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
}
.spinner.dice-5 {
  -webkit-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
}
.spinner.dice-6 {
  -webkit-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  -ms-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  -o-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
}
</style>
