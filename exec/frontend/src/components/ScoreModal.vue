<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <p>✨당신의 점수는?✨</p>
        </div>
        <div class="modal-body">
          <p>{{ score }}/5</p>
        </div>
        <div class="modal-footer">
          <button @click="goToGame">다시하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreModal",
  props: {
    score: Number,
  },
  methods: {
    goToGame() {
      this.$router.push({ name: "SelectCardGame" });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: black;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal-container {
      width: 30vw;
      height: 20vw;
      padding: 1% 2%;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      background-color: #fff;
      .modal-header {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 25%;
        padding-top: 1%;
        font-size: 1.8vw;
      }
      .modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60%;
        font-size: 4vw;
      }
      .modal-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 15%;
      }
    }
  }
}
</style>
