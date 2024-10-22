<template>
  <div class="sales">
    <div class="first">
      <div>
        <img src="@/assets/images/playstations.webp" alt="SALE" />
        <div class="overlay"></div>
      </div>
      <div>
        <img src="@/assets/images/headset.webp" alt="SALE" />
        <div class="overlay"></div>
      </div>
      <div>
        <img src="@/assets/images/chairs.webp" alt="SALE" />
        <div class="overlay"></div>
      </div>
    </div>
    <div class="second">
      <div>
        <img src="@/assets/images/iphones.webp" alt="SALE" />
        <div class="overlay"></div>
      </div>
      <div>
        <img src="@/assets/images/laptops.webp" alt="SALE" />
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sales {
  background-color: #eee;
  padding: 40px;
  @media (max-width: 767px) {
    padding: 40px 12px;
  }
  .first,
  .second {
    display: grid;
    gap: 40px;
    > div {
      text-align: center;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: 0.6s;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: 0.6s;
      }
      &:hover {
        img {
          transform: scale(1.06);
        }
        .overlay {
          opacity: 1;
        }
      }
    }
  }
  .first {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  .second {
    grid-template-columns: 1fr 1fr;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
