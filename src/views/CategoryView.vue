<template>
  <div class="category my-16 mx-10">
    <h2
      class="text-center"
      style="text-transform: uppercase; margin-bottom: 50px"
    >
      {{ this.$route.params.category }}
    </h2>
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="(product, i) in categoryProducts" :key="i">
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
            <v-card-text class="pl-1 pb-2">
              {{ product.title }}
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
            <div>
              <v-btn
                class="mt-6 mb-6"
                variant="outlined"
                style="border-radius: 30px; width: 70%"
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["Emitter"],
  data() {
    return {
      displayedImg: [],
    };
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
    addToCart(item) {
      item.quantity = this.quantity;
      item.size = this.size;
      item.color = this.color;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("openMsg", item.title);
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
      await this.getProductsByCategory(this.$route.params.category);
      document.title = `Ellamart - ${this.$route.params.category}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  .img-holder:hover {
    .quick-view {
      opacity: 1 !important;
    }
  }
}
</style>
