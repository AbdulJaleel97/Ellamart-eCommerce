<template>
  <div class="products-swiper py-14">
    <div class="title d-flex justify-space-between align-center mb-10">
      <h2 :class="`text-${titleColor}`">{{ title }}</h2>
      <div style="text-decoration: underline; cursor: pointer">Shop All</div>
    </div>
    <v-row>
      <v-col cols="12" v-if="!products.length">
        <v-row>
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="image,article,button"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <Swiper
          :modules="modules"
          :slides-per-view="
            screenWidth > 1400
              ? 5
              : screenWidth > 1100
              ? 4
              : screenWidth > 991
              ? 3
              : screenWidth > 576
              ? 2
              : 2
          "
          :space-between="12"
          :pagination="{ clickable: true }"
          :navigation="{ prevEl: '.prev-el', nextEl: '.next-el' }"
          class="position-relative"
        >
          <SwiperSlide
            class="swiper-slide"
            v-for="product in products"
            :key="product.id"
            style="height: 480px"
          >
            <v-card elevation="0">
              <div
                class="img-holder text-center position-relative"
                style="height: 150px"
              >
                <img
                  style="max-width: 100%; height: 100%; width: 100%"
                  :src="
                    displayedImg[product.title]
                      ? displayedImg[product.title]
                      : product.thumbnail
                  "
                  alt="Product"
                />
                <v-btn
                  class="quick-view"
                  density="compact"
                  variant="outlined"
                  style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    border-radius: 30px;
                    padding: 10px 20px;
                    transition: 0.3s;
                    opacity: 0;
                    border: none;
                  "
                  @click="openQuickView(product)"
                >
                  <span>Quick View</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </v-btn>
              </div>
              <v-card-text class="pl-1 pb-0 pt-3" style="height: 50px">
                {{
                  `(${product.title}) ${product.description}`.length <= 45
                    ? `(${product.title}) ${product.description}`
                    : `(${product.title}) ${product.description}`.substring(
                        0,
                        45
                      ) + "..."
                }}
              </v-card-text>
              <v-rating
                v-model="product.rating"
                half-increments
                readonly
                color="#ffd700"
                density="compact"
                size="x-small"
                style="gap: 2px"
              ></v-rating>
              <v-card-text class="pl-1 pt-2">
                <span style="text-decoration: line-through">{{
                  `$${product.price}`
                }}</span>
                To
                <span
                  class="font-weight-bold text-red-darken-3"
                  style="font-size: 18px; color: #dc3545; font-weight: 900"
                  >{{
                    `$${Math.floor(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )}`
                  }}</span
                >
              </v-card-text>
              <v-btn-toggle
                v-model="displayedImg[product.title]"
                style="height: 55px"
                mandatory
              >
                <v-btn
                  v-for="(img, i) in product.images"
                  :key="i"
                  :value="img"
                  class="py-0 px-1"
                  size="x-small"
                  style="margin-right: 4px; border-radius: 15px"
                >
                  <img
                    width="40"
                    height="40"
                    style="border-radius: 50%"
                    :src="img"
                    alt="Product"
                  />
                </v-btn>
              </v-btn-toggle>
              <div>
                <v-btn
                  class="my-3 choose-btn"
                  variant="outlined"
                  style="border-radius: 30px; width: 50%"
                  @click="
                    $router.push({
                      name: 'product-details',
                      params: {
                        id: product.id,
                        description: product.description,
                      },
                    })
                  "
                  >Choose Options</v-btn
                >
              </div>
            </v-card>
          </SwiperSlide>
          <!-- <div class="swiper-btns position-absolute">
        <button class="prev-el"><v-icon>mdi-chevron-left</v-icon></button>
        <button class="next-el"><v-icon>mdi-chevron-right</v-icon></button>
      </div> -->
        </Swiper>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

export default {
  inject: ["Emitter"],
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  data: () => ({
    displayedImg: [],
    modules: [Navigation, Pagination],
    screenWidth: 0,
  }),
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  methods: {
    ResizeWindow() {
      this.screenWidth = window.innerWidth;
    },
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  mounted() {
    window.addEventListener("resize", this.ResizeWindow);
    this.ResizeWindow();
  },
};
</script>

<style lang="scss">
.swiper-slide {
  @media (max-width: 767px) {
    height: 420px !important;
  }
}
.products-swiper {
  margin: 0 60px;
  @media (max-width: 767px) {
    margin: 0 12px;
  }
}
.swiper-pagination-bullet-active {
  background: rgb(22, 24, 128);
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}
.v-rating__wrapper {
  width: 15px;
  height: 15px;
}
.img-holder {
  height: 200px !important;
  @media (max-width: 767px) {
    height: 140px !important;
  }
  &:hover {
    .quick-view {
      opacity: 1 !important;
    }
  }
}
.choose-btn {
  @media (max-width: 767px) {
    width: 95% !important;
    padding: 0 !important;
  }
}
.swiper-pagination {
  bottom: 0 !important;
}
// .swiper-btns {
//   top: 50%;
//   left: 0;
//   transform: translateY(-50%);
//   z-index: 9;
//   display: flex;
//   width: calc(100% - 20px);
//   justify-content: space-between;
//   margin: 0 10px;
//   button {
//     width: 40px;
//     height: 40px;
//     border: 1px solid grey;
//     border-radius: 50%;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     background-color: rgb(22, 24, 128);
//     i {
//       width: 100%;
//       height: 100%;
//       color: white;
//     }
//   }
// }
</style>
