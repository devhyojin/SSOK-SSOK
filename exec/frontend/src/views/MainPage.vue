<template>
  <v-container fluid fill-height>
    <div class="background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    <div class="contents">
      <nav>
        <v-tooltip bottom color="deep-purple accent-3">
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="glow mx-2"
              @click="moveWelcomePage"
            ></div>
          </template>
          <span>웰컴페이지 GO GO!</span>
        </v-tooltip>
      </nav>
      <v-row class="planets">
        <div class="left-section col-sm-12 col-lg-6">
          <div class="venus pa-1">
            <div class="mascot-card">
              <img
                class="d-xl-block d-sm-none d-lg-block"
                @click="moveSelectCardGame"
                src="@/assets/images/mascot-card.png"
                alt="mascot-card"
              />
              <p @click="moveSelectCardGame">카드 게임</p>
            </div>
            <div class="venus-img">
              <img
                @click="moveSelectCardGame"
                class="spin"
                src="@/assets/images/venus.png"
                alt="venus"
              />
            </div>
          </div>
        </div>
        <div class="right-section col-sm-12 col-lg-6">
          <div class="greenus pa-1">
            <div class="mascot-camera">
              <img
                class="d-xl-block d-sm-none d-lg-block"
                @click="moveSmartCameraGame"
                src="@/assets/images/mascot-camera.png"
                alt="mascot-camera"
              />
              <p @click="moveSmartCameraGame">카메라 게임</p>
            </div>
            <div class="greenus-img">
              <img
                @click="moveSmartCameraGame"
                class="spin"
                src="@/assets/images/greenus.png"
                alt="greenus"
              />
            </div>
          </div>
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {};
  },
  methods: {
    moveSmartCameraGame() {
      this.$router.push({ name: "SmartCameraGame" });
    },
    moveSelectCardGame() {
      this.$router.push({ name: "SelectCardGame" });
    },
    moveWelcomePage() {
      this.$router.push({ name: "WelcomePage" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/star.sass";
@import "@/style/light-button.scss";
.container {
  padding: 1%;
  .background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .contents {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    padding: 1%;
    // navbar
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 5%;
      padding: 2.5% 0.9%;
      margin-bottom: 2%;
      background: none;
      color: white;
      font-size: 1rem;
    }
    .planets {
      overflow: visible !important;
      width: 100%;
      height: 60vw;
      padding: 0 12%;
      margin: 0;
      .left-section {
        .venus {
          height: 100%;
          padding: 1%;
          .mascot-card {
            position: relative;
            z-index: 10;
            width: 40%;
            margin: 0 auto;
            img {
              position: relative;
              z-index: 20;
              width: 100%;
              cursor: pointer;
            }
            p {
              position: absolute;
              z-index: 100;
              width: 100%;
              margin: 35% 0;
              background: rgba(22, 18, 0, 0.8);
              color: white;
              text-align: center;
              font-size: 3vw;
              font-weight: bold;
              cursor: pointer;
            }
          }
          .venus-img {
            position: relative;
            bottom: 10%;
            width: 70%;
            margin: 0 auto;
            .spin {
              width: 100%;
              animation: rotate 12.5s linear infinite;
              transform-origin: 50% 50%;
              cursor: pointer;
            }
          }
        }
      }
      .right-section {
        .greenus {
          height: 100%;
          padding: 1%;
          .mascot-camera {
            position: relative;
            z-index: 10;
            width: 40%;
            margin: 0 auto;
            img {
              position: relative;
              z-index: 20;
              width: 100%;
              cursor: pointer;
            }
            p {
              position: absolute;
              z-index: 100;
              width: 100%;
              margin: 35% 0;
              background: rgba(22, 18, 0, 0.8);
              color: white;
              text-align: center;
              font-size: 2.7vw;
              font-weight: bold;
              cursor: pointer;
            }
          }
          .greenus-img {
            position: relative;
            bottom: 10%;
            width: 70%;
            margin: 0 auto;
            .spin {
              width: 100%;
              animation: rotate 12s linear infinite;
              transform-origin: 50% 50%;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
