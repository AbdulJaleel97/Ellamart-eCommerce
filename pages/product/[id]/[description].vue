<template>
  <div class="product-details mt-10">
    <v-container fluid>
      <v-row class="justify-center mb-10">
        <v-col
          cols="12"
          md="5"
          class="text-center d-flex justify-space-between flex-column"
        >
          <v-skeleton-loader
            v-if="isLoading"
            type="image, image, image, image"
          ></v-skeleton-loader>
          <div
            class="d-flex justify-center align-center"
            v-else
            style="height: 500px"
          >
            <img
              style="max-width: 100%; max-height: 500px"
              :src="tab ? tab : productDetails.thumbnail"
              alt="Product Image"
            />
          </div>
          <v-tabs
            center-active
            height="100"
            class="d-flex justify-center mt-6"
            v-model="tab"
            v-if="!isLoading"
          >
            <v-tab
              width="120px"
              v-for="(img, i) in productDetails.images"
              :key="i"
              :value="img"
            >
              <img class="w-100" :src="img" alt="Images" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5">
          <v-skeleton-loader
            v-if="isLoading"
            type="article, article, article,article"
          ></v-skeleton-loader>
          <v-card v-else elevation="0">
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 22px; font-weight: 500; line-height: 1.5"
            >
              ({{ productDetails.title }}) Sample -
              {{ productDetails.category }}
              For Sale</v-card-text
            >
            <div class="rating-parent d-flex alig-start">
              <v-rating
                v-model="productDetails.rating"
                half-increments
                readonly
                color="#ffd700"
                density="compact"
                size="x-small"
                style="gap: 4px; font-size: 15px; margin-right: 15px"
              >
              </v-rating>
              <span style="margin-right: 15px"
                >Stock: {{ productDetails.stock }}</span
              >
              <span class="text-red text-end" style="flex: 1"
                >9 Sold in the last 10 hours</span
              >
            </div>
            <v-card-text class="px-0" style="font-size: 14px; color: grey">
              {{ productDetails.description }}
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="font-size: 14px; color: grey">
              Brand:
              <span class="text-black">{{ productDetails.brand }}</span>
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="font-size: 14px; color: grey">
              Vendor: <span class="text-black">Ella - Customer</span>
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="font-size: 14px; color: grey">
              SKU: <span class="text-black">KJSU-58636</span>
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="font-size: 14px; color: grey">
              Availability:
              <span style="color: #3ed660" v-if="productDetails.stock > 0">
                {{ productDetails.stock + " In stock" }}
              </span>
              <span class="text-black" v-else>Out Of Stock</span>
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              Price:
              <span style="text-decoration: line-through">{{
                ` $${productDetails.price}`
              }}</span>
              To
              <span style="font-size: 18px; color: black; font-weight: bold">{{
                `$${Math.floor(
                  productDetails.price -
                    (productDetails.price * productDetails.discountPercentage) /
                      100
                )}.00`
              }}</span>
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <div class="mb-4 d-flex justify-space-between">
                <div>
                  SIZE:
                  <span
                    class="text-black font-weight-bold"
                    style="font-size: 18px"
                  >
                    {{ size }}</span
                  >
                </div>
                <div style="color: #808080; font-size: 16px; cursor: pointer">
                  <i class="fa-solid fa-ruler"></i>
                  Size Guide
                </div>
              </div>
              <v-btn-toggle
                class="btn-toggle"
                style="border-radius: 0; height: fit-content"
                v-model="size"
                mandatory
              >
                <v-btn
                  class="pa-3 mr-3"
                  style="
                    width: 50px;
                    height: 97%;
                    border-radius: 6px;
                    background-color: #eaeaea;
                  "
                  value="XS"
                >
                  XS
                </v-btn>
                <v-btn
                  class="pa-3 mr-3"
                  style="
                    width: 50px;
                    height: 97%;
                    border-radius: 6px;
                    background-color: #eaeaea;
                  "
                  value="S"
                >
                  S
                </v-btn>
                <v-btn
                  class="pa-3 mr-3"
                  style="
                    width: 50px;
                    height: 97%;
                    border-radius: 6px;
                    background-color: #eaeaea;
                  "
                  value="L"
                >
                  L
                </v-btn>
                <v-btn
                  class="pa-3 mr-3"
                  style="
                    width: 50px;
                    height: 97%;
                    border-radius: 6px;
                    background-color: #eaeaea;
                  "
                  value="XL"
                >
                  XL
                </v-btn>
              </v-btn-toggle>
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <div class="mb-5">Colors: {{ color }}</div>
              <div class="d-flex">
                <v-btn-toggle class="color-toggle" v-model="color" mandatory>
                  <v-btn size="x-small" value="Black">
                    <div class="black"></div>
                  </v-btn>
                  <v-btn size="x-small" value="Purple">
                    <div class="purple"></div>
                  </v-btn>
                  <v-btn size="x-small" value="Pink">
                    <div class="pink"></div>
                  </v-btn>
                  <v-btn size="x-small" value="Burlywood">
                    <div class="burlywood"></div>
                  </v-btn>
                </v-btn-toggle>
              </div>
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <span>Quantity:</span>
              <div
                class="counter mt-2"
                style="
                  border: 1px solid rgb(201 201 201 / 50%);
                  width: fit-content;
                  border-radius: 30px;
                  padding: 5px;
                "
              >
                <v-icon
                  @click="quantity > 1 ? quantity-- : quantity"
                  style="color: rgb(155, 155, 155)"
                  >mdi-minus</v-icon
                >
                <input
                  type="number"
                  style="
                    border: none;
                    outline: none;
                    text-align: center;
                    width: 80px;
                  "
                  :value="quantity"
                />
                <v-icon @click="quantity++" style="color: rgb(155, 155, 155)"
                  >mdi-plus</v-icon
                >
              </div>
            </v-card-text>
            <v-card-text class="pl-0 pt-0 mt-5">
              <span style="color: grey"> Subtotal:</span>
              <span class="text-black font-weight-bold" style="font-size: 18px">
                ${{
                  quantity *
                  Math.floor(
                    productDetails.price -
                      (productDetails.price *
                        productDetails.discountPercentage) /
                        100
                  )
                }}
              </span>
            </v-card-text>
            <v-btn
              class="add-to-cart"
              style="
                background-color: rgb(37, 37, 37);
                color: white;
                border-radius: 30px;
                width: 50%;
                text-transform: none;
                height: 50px;
                font-size: 16px;
              "
              @click="addToCart(productDetails)"
              :loading="btnLoading"
              >Add to Cart</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  data: () => ({
    color: "Black",
    size: "XS",
    quantity: 1,
    tab: "",
    isLoading: false,
    dialog: false,
    btnLoading: false,
  }),
  computed: {
    ...mapState(productsModule, ["productDetails"]),
  },
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(productsModule, ["singleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
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
  watch: {
    async $route() {
      if (this.$route.name == "product-id-description") {
        this.tab = "";
        await this.singleProduct(this.$route.params.id);
      }
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.singleProduct(this.$route.params.id);
    this.isLoading = false;
    this.tab = "";
  },
};
</script>

<style lang="scss">
.v-slide-group__content {
  justify-content: center;
}
.color-toggle {
  button {
    padding: 5px;
    margin-right: 6px;
    .v-btn__overlay,
    .v-btn__underlay {
      display: none;
    }
    .v-ripple__container {
      display: none;
    }
  }
}
.add-to-cart {
  @media (max-width: 767px) {
    width: 100% !important;
  }
}
</style>
