<template>
  <div class="new-products">
    <v-container fluid>
      <div class="title d-flex justify-space-between align-center mb-10">
        <h2 :class="[`text-${titleColor}`]">{{ title }}</h2>
        <div style="text-decoration: underline; cursor: pointer">Shop All</div>
      </div>
      <v-row>
        <v-col cols="8" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="8" class="mt-10">
          <Swiper
            :modules="modules"
            :slides-per-view="
              screenWidth > 1460 ? 4 : screenWidth > 1100 ? 3 : 2
            "
            :space-between="10"
            :pagination="{ clickable: true }"
            :navigation="{ prevEl: '.prev-el', nextEl: '.next-el' }"
            class="position-relative"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="product in products"
              :key="product.id"
              style="height: 545px"
            >
              <v-card elevation="0">
                <div
                  class="img-holder text-center position-relative"
                  style="height: 200px"
                >
                  <img
                    style="max-width: 100%; max-height: 100%; width: 100%"
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
                <v-card-text class="pl-1 pb-0 pt-1" style="height: 50px">
                  {{ `(${product.title}) ` }}
                  {{
                    `(${product.title}) ${product.description}`.length <= 45
                      ? `(${product.title}) ${product.description}`
                      : `(${product.title}) ${product.description}`.substring(
                          0,
                          30
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
                    class="pa-0"
                    size="x-small"
                    style="margin-right: 4px"
                  >
                    <img
                      width="40"
                      height="40"
                      style="
                        max-width: 100%;
                        max-height: 100%;
                        border: 1px solid grey;
                        border-radius: 50%;
                      "
                      :src="img"
                      alt="Product"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div>
                  <v-btn
                    class="mt-6 mb-6"
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
        <v-col cols="4">
          <img
            class="w-100"
            src="@/assets/images/vr-banner.webp"
            alt="Banner"
          />
        </v-col>
      </v-row>
    </v-container>
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

<style lang="scss" scoped>
.new-products {
  padding-top: 90px;
  width: 96%;
  margin: auto;
}
.img-holder:hover {
  .quick-view {
    opacity: 1 !important;
  }
}
</style>
