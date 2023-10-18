<template>
  <div class="product-details">
    <v-dialog v-model="dialog" class="dialog">
      <v-icon
        class="position-absolute"
        style="
          width: 30px;
          height: 34px;
          top: -17px;
          right: -15px;
          background: black;
          color: red;
        "
        @click="this.dialog = false"
        >mdi-close</v-icon
      >
      <v-container
        fluid
        class="bg-white pa-10 quick-view-parent"
        style="overflow: auto; border-radius: 8px"
      >
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="text-center d-flex justify-space-between flex-column"
          >
            <v-skeleton-loader
              v-if="isLoading"
              type="image, image, image, image"
            ></v-skeleton-loader>
            <div
              class="d-flex justify-center align-center img-parent"
              v-else
              style="height: 500px"
            >
              <img
                style="max-width: 100%; max-height: 500px"
                :src="tab ? tab : product.thumbnail"
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
                v-for="(img, i) in product.images"
                :key="i"
                :value="img"
              >
                <img class="w-100" :src="img" alt="Images" />
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12" md="6">
            <v-skeleton-loader
              v-if="isLoading"
              type="article, article, article,article"
            ></v-skeleton-loader>
            <v-card v-else elevation="0">
              <v-card-text
                class="px-0 pt-0"
                style="font-size: 22px; font-weight: 500; line-height: 1.5"
              >
                ({{ product.title }}) Sample -
                {{ product.category }}
                For Sale</v-card-text
              >
              <div class="rating-parent d-flex alig-start">
                <v-rating
                  v-model="product.rating"
                  half-increments
                  readonly
                  color="#ffd700"
                  density="compact"
                  size="x-small"
                  style="gap: 4px; font-size: 15px; margin-right: 15px"
                >
                </v-rating>
                <span style="margin-right: 15px"
                  >Stock: {{ product.stock }}</span
                >
                <span class="text-red text-end" style="flex: 1"
                  >9 Sold in the last 10 hours</span
                >
              </div>
              <v-card-text class="px-0" style="font-size: 14px; color: grey">
                {{ product.description }}
              </v-card-text>
              <v-card-text
                class="px-0 pt-0"
                style="font-size: 14px; color: grey"
              >
                Brand:
                <span class="text-black">{{ product.brand }}</span>
              </v-card-text>
              <v-card-text
                class="px-0 pt-0"
                style="font-size: 14px; color: grey"
              >
                Vendor: <span class="text-black">Ella - Customer</span>
              </v-card-text>
              <v-card-text
                class="px-0 pt-0"
                style="font-size: 14px; color: grey"
              >
                SKU: <span class="text-black">KJSU-58636</span>
              </v-card-text>
              <v-card-text
                class="px-0 pt-0"
                style="font-size: 14px; color: grey"
              >
                Availability:
                <span class="text-black">
                  {{
                    product.stock > 0
                      ? product.stock + " In stock"
                      : "Out of stock"
                  }}</span
                >
              </v-card-text>
              <v-card-text class="pl-0 pt-0">
                Price:
                <span style="text-decoration: line-through">{{
                  ` $${product.price}`
                }}</span>
                To
                <span
                  style="font-size: 18px; color: black; font-weight: bold"
                  >{{
                    `$${Math.floor(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )}.00`
                  }}</span
                >
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
                  <v-icon @click="decCount" style="color: rgb(155, 155, 155)"
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
                  <v-icon @click="incCount" style="color: rgb(155, 155, 155)"
                    >mdi-plus</v-icon
                  >
                </div>
              </v-card-text>
              <v-card-text class="pl-0 pt-0">
                <span style="color: grey">Subtotal:</span>
                <span>
                  ${{
                    quantity *
                    Math.floor(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )
                  }}</span
                >
              </v-card-text>
              <v-btn
                style="
                  background-color: rgb(37, 37, 37);
                  color: white;
                  border-radius: 30px;
                  width: 50%;
                  text-transform: none;
                  height: 50px;
                  font-size: 16px;
                "
                @click="addToCart(product)"
                :loading="btnLoading"
                >Add to Cart</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";

export default {
  data: () => ({
    color: "Black",
    size: "XS",
    quantity: 1,
    tab: "",
    isLoading: false,
    dialog: false,
    product: "",
    btnLoading: false,
  }),
  components: {
    VSkeletonLoader,
  },
  methods: {
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
    incCount() {
      this.quantity++;
    },
    decCount() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
  mounted() {
    this.tab = "";
    this.$bus.$on("openQuickView", (data) => {
      this.isLoading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    });
  },
};
</script>

<style lang="scss">
.quick-view-parent {
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8d8d8d;
    border-radius: 0;
  }
}
.v-slide-group__content {
  justify-content: center;
}
.img-parent {
  @media (max-width: 767px) {
    height: 350px;
  }
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
  div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid white;
    outline: 2px solid rgba(150, 150, 150, 0.5) !important;
    display: block;
    &.black {
      background-color: black;
    }
    &.purple {
      background-color: purple;
    }
    &.pink {
      background-color: pink;
    }
    &.burlywood {
      background-color: burlywood;
    }
  }
}
.dialog {
  max-width: 85%;
  max-height: 98vh;
  @media (max-width: 767px) {
    max-width: 100% !important;
  }
}
.btn-toggle {
  > button {
    &:hover {
      background-color: white !important;
      box-shadow: 0 2px 8px #0003 !important;
      .v-btn__overlay {
        border: 2px solid black !important;
      }
    }
  }
  .v-btn__overlay {
    background-color: white;
    border: 1px solid grey;
  }
  .v-ripple__container {
    display: none;
  }
  .v-btn--active {
    background-color: white !important;
    border: 1px solid rgb(211, 211, 211);
  }
}
</style>
