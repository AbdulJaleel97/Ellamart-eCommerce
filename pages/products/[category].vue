<template>
  <div class="category my-16">
    <v-container fluid>
      <v-skeleton-loader v-if="!categoryProducts.length" type="article">
      </v-skeleton-loader>
      <h2
        class="text-center"
        style="text-transform: uppercase; margin-bottom: 50px"
        v-else
      >
        {{ $route.params.category }}
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg=""
          v-if="!categoryProducts.length"
          v-for="num in 5"
          :key="num"
        >
          <v-skeleton-loader type="image,article,button"> </v-skeleton-loader>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg=""
          v-for="(product, i) in categoryProducts"
          :key="i"
          v-else
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
              class="pl-1 pb-2"
              style="cursor: pointer; height: 50px"
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
            >
            </v-rating>
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
              >
                <img
                  width="40"
                  height="40"
                  style="
                    max-width: 100%;
                    max-height: 100%;
                    border: 1px solid grey;
                    border-radius: 50%;
                    margin-right: 8px;
                  "
                  :src="img"
                  alt="Product"
                />
              </v-btn>
            </v-btn-toggle>
            <nuxt-link
              style="text-decoration: none"
              :to="`/product/${product.id}/${product.description}`"
            >
              <v-btn
                class="my-3 choose-btn"
                variant="outlined"
                style="
                  border-radius: 30px;
                  width: 70%;
                  color: black;
                  border-color: black;
                  display: block;
                "
              >
                Choose Options
              </v-btn>
            </nuxt-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  data() {
    return {
      displayedImg: [],
      title: "",
    };
  },
  components: {
    VSkeletonLoader,
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.$bus.$emit("openQuickView", product);
    },
    addToCart(item) {
      item.quantity = this.quantity;
      item.size = this.size;
      item.color = this.color;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.$bus.$emit("openCart");
        this.$bus.$emit("openMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  async mounted() {
    await this.getProductsByCategory(this.$route.params.category);
    document.title = `Ellamart - ${this.$route.params.category}`;
  },
  watch: {
    async $route() {
      if (this.$route.name == "products-category") {
        await this.getProductsByCategory(this.$route.params.category);
        document.title = `Ellamart - ${this.$route.params.category}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  margin-left: 40px;
  margin-right: 40px;
  @media (max-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
  }
  .img-holder {
    height: 280px !important;
    &:hover {
      .quick-view {
        opacity: 1 !important;
      }
    }
  }
  .choose-btn {
    transition: 0.3s;
    &:hover {
      background-color: #0a6cdc !important;
      border-color: #0a6cdc !important;
      color: white !important;
    }
    @media (max-width: 767px) {
      width: 95% !important;
      padding: 0 !important;
    }
  }
}
</style>
