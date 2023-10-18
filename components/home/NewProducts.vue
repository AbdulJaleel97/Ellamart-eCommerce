<template>
  <div class="new-products">
    <v-container fluid>
      <div class="title d-flex justify-space-between align-center mb-10">
        <h2 :class="[`text-${titleColor}`]">{{ title }}</h2>
        <nuxt-link
          :class="`text-${titleColor}`"
          :to="`/products/${categories[index].route}`"
          >Shop All</nuxt-link
        >
      </div>
      <v-row>
        <v-col cols="12" md="8" v-if="!products.length">
          <v-row>
            <v-col :cols="12 / number" v-for="num in number" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="12" md="8" class="mt-10">
          <Swiper
            :modules="modules"
            :slides-per-view="
              screenWidth > 1460
                ? 4
                : screenWidth > 1100
                ? 3
                : screenWidth > 540
                ? 2
                : 1.2
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
              style="height: 490px"
            >
              <v-card elevation="0">
                <div class="img-holder text-center position-relative">
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
                      padding: 6px 10px;
                      transition: 0.3s;
                      opacity: 0;
                      border: none;
                    "
                    @click="openQuickView(product)"
                  >
                    <span>Quick View</span>
                    <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                  </v-btn>
                </div>
                <v-card-text
                  class="pl-1 pb-0 pt-3"
                  style="height: 50px; cursor: pointer; font-weight: 600"
                  @click="openQuickView(product)"
                >
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
                        params: {
                          id: product.id,
                          description: product.description,
                        },
                      })
                    "
                  >
                    Choose Options
                  </v-btn>
                </div>
              </v-card>
            </SwiperSlide>
          </Swiper>
        </v-col>
        <v-col cols="12" md="4">
          <img
            class="w-100"
            src="~/assets/images/vr-banner.webp"
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
import { productsModule } from "~/stores/products";
import { mapState } from "pinia";
export default {
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
    index: {
      type: Number,
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  data: () => ({
    displayedImg: [],
    modules: [Navigation, Pagination],
    screenWidth: 0,
    number: 0,
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
      this.$bus.$emit("openQuickView", product);
    },
    calcWidth() {
      return this.screenWidth > 1460
        ? (this.number = 4)
        : this.screenWidth > 1100
        ? (this.number = 3)
        : this.screenWidth > 540
        ? (this.number = 2)
        : (this.number = 1);
    },
  },
  mounted() {
    window.addEventListener("resize", this.ResizeWindow);
    this.ResizeWindow();
    this.calcWidth();
  },
};
</script>

<style lang="scss" scoped>
.new-products {
  padding-top: 50px;
  width: 96%;
  margin: auto;
  @media (max-width: 767px) {
    width: 100%;
  }
}
.img-holder {
  height: 200px !important;
  &:hover {
    .quick-view {
      opacity: 1 !important;
    }
  }
}
</style>
