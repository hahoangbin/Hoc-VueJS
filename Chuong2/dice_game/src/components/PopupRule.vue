<template>
  <div class="wrapper-popup" :class="getClassPopup">
    <div class="rule">
      <h3>Luật chơi</h3>
      <p>
        Bấm New Game rồi bắt đầu chơi người dành được đủ số điểm trước sẽ là
        người chiến thắng !
      </p>
      <button class="button" @click="confirm">Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-rule',
  props: {
    isOpenPopup: Boolean
  },
  data () {
    return {}
  },
  computed: {
    getClassPopup () {
      return {
        'open-popup': this.isOpenPopup
      }
    }
  },
  methods: {
    confirm () {
      console.log('confirm')
      this.$emit('handleConfirm')
    }
  }
}
</script>

<style>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all .4s ease;
}
.wrapper-popup.open-popup {
  opacity: 1;
  visibility: visible;
}
.rule {
  position: absolute;
  background: #fff;
  width: 320px;
  height: 180px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  padding: 15px;
  border-radius: 6px;
  font-family: Arial, Helvetica, sans-serif;
  transition: all .4s ease;
}
.open-popup .rule {
  transform: translate(-50%, -50%) scale(1);
}
.rule button {
  height: 36px;
  padding: 0 18px;
  margin-top: 26px;
  margin-left: 50%;
  transform: translate(-50%, 0);
  background: #0fa4df;
  border: 1px solid #fde8e8;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.rule button:hover {
  background: #066f99;
}
p {
  margin-top: 8px;
}
/* Kết hợp css3 với VueJS để xây dựng hiệu ứng  zom-in zom-out*/
</style>
