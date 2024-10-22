<template>
  <div class="banner position-relative">
    <div class="parent text-white">
      <div class="text">
        <h2>
          <span style="color: #19ffff">Huge Savings</span>
          on<br />UHD Televisions
        </h2>
        <p>sale up to 70% off on Sony Televisions</p>
        <v-btn variant="outlined" style="border-radius: 30px; height: auto"
          >SHOP NOW</v-btn
        >
      </div>
      <img src="@/assets/images/banner-bg.jpg" alt="Banner" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  .parent {
    .text {
      padding-left: 160px;
      padding-top: 60px;
      padding-bottom: 110px;
      background-color: rgba(0, 0, 0, 0.3);
      h2 {
        font-size: 70px;
      }
      p {
        font-size: 25px;
      }
      @media (max-width: 991px) {
        & {
          padding-left: 20px;
          h2 {
            font-size: 30px;
          }
          p {
            font-size: 18px;
          }
          button {
            margin-top: 50px;
          }
        }
      }
    }
    button {
      padding: 12px 50px;
      margin-top: 80px;
    }
    img {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
