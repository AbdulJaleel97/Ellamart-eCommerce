<template>
  <div
    class="cart-drawer"
    :style="`display: ${$route.name == 'checkout' ? 'none' : 'block'}`"
  >
    <v-navigation-drawer
      class="position-fixed nav-cart"
      location="right"
      v-model="drawer"
      temporary
    >
      <v-row>
        <v-col
          class="d-flex justify-start align-center"
          cols="10"
          style="font-weight: bold; font-size: 20px; letter-spacing: 1.2px"
          >Shopping Cart
        </v-col>
        <v-col
          cols="2"
          class="d-flex justify-end align-center"
          style="font-size: 18px"
        >
          <span
            style="
              background-color: grey;
              border-radius: 3px;
              color: white;
              padding: 5px 7px;
              cursor: pointer;
            "
            @click="this.drawer = false"
            >X</span
          >
        </v-col>
      </v-row>
      <div class="mt-2">{{ cartItems.length }} Items</div>
      <p class="mb-0 mt-3" v-if="cartItems.length <= 0">
        <span style="font-weight: bold">$10000</span>
        purchases guarantee a
        <span style="font-weight: bold"> free shipping! </span>
      </p>
      <div v-if="cartItems.length > 0">
        <div
          class="position-relative mb-7"
          v-if="cartItems.length > 0 && 10000 - totalPrice > 0"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shipping-fast"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="svg-inline--fa fa-shipping-fast fa-w-20 fa-3x"
            width="20"
            color="rgba(255, 0, 0, 0.68)"
            :style="`position: relative;
              bottom: -7px;
              z-index: 999;
              transition: 0.20s;
              left: calc(${parseInt((totalPrice / 10000) * 100)}% - 20px);`"
          >
            <path
              fill="currentColor"
              d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
              class=""
            ></path>
          </svg>
          <v-progress-linear
            height="6"
            color="rgba(255, 0, 0, 0.68)"
            :model-value="parseInt((totalPrice / 10000) * 100)"
            striped
          ></v-progress-linear>
          <p class="mb-0 mt-3">
            Only
            <span style="font-weight: bold"
              >${{ `${10000 - totalPrice}` }}</span
            >
            Away from
            <span style="font-weight: bold"> Free shipping! </span>
          </p>
        </div>
        <div
          class="position-relative mb-7"
          v-if="cartItems.length > 0 && 10000 - totalPrice <= 0"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shipping-fast"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="svg-inline--fa fa-shipping-fast fa-w-20 fa-3x"
            width="20"
            color="rgb(105, 198, 156)"
            style="
              position: relative;
              bottom: -7px;
              z-index: 999;
              left: calc(100% - 20px);
            "
          >
            <path
              fill="currentColor"
              d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
              class=""
            ></path>
          </svg>
          <v-progress-linear
            height="6"
            color="rgb(105, 198, 156)"
            model-value="100"
            striped
          ></v-progress-linear>
          <p class="mb-0 mt-3 font-weight-bold">
            Your order includes free shipping now!
          </p>
        </div>
        <v-card
          class="pa-0 mb-10"
          elevation="0"
          v-for="product in cartItems"
          :key="product.id"
        >
          <v-row>
            <v-col cols="4">
              <img
                @click="
                  $router.push({
                    name: 'product-id-description',
                    params: {
                      id: product.id,
                      description: product.description,
                    },
                  })
                "
                style="max-width: 100%; cursor: pointer"
                :src="product.thumbnail"
                alt="ProductImage"
              />
            </v-col>
            <v-col cols="8">
              <p
                @click="
                  $router.push({
                    name: 'product-id-description',
                    params: {
                      id: product.id,
                      description: product.description,
                    },
                  })
                "
                style="
                  color: #212529;
                  font-size: 13px;
                  font-weight: 500;
                  line-height: 1.7;
                  cursor: pointer;
                "
              >
                ({{ product.title }}) {{ product.description }} -
                {{ product.color }}
              </p>
              <em
                style="
                  font-weight: thin;
                  font-size: 12px;
                  margin-top: 12px;
                  display: block;
                "
              >
                {{ product.size }} / {{ product.color }}
              </em>
              <div class="d-flex justify-space-between align-center mt-3">
                <div class="price" style="font-weight: 500">
                  ${{
                    Math.floor(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    ) * product.quantity
                  }}
                </div>
                <div
                  class="delete-product"
                  @click="deleteItem(product.id)"
                  style="cursor: pointer"
                >
                  <v-icon>mdi-close</v-icon>
                </div>
              </div>
              <v-card-text class="pl-0 pt-0">
                <div
                  class="counter mt-3"
                  style="
                    border: 1px solid rgb(201 201 201 / 50%);
                    width: fit-content;
                    border-radius: 30px;
                    padding: 5px;
                  "
                >
                  <v-icon
                    @click="
                      product.quantity > 1
                        ? product.quantity--
                        : product.quantity
                    "
                    style="color: rgb(155, 155, 155)"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      text-align: center;
                      width: 60px;
                    "
                    v-model="product.quantity"
                  />
                  <v-icon
                    @click="product.quantity++"
                    style="color: rgb(155, 155, 155)"
                  >
                    mdi-plus
                  </v-icon>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <div class="px-10 mt-10 mb-10">
          <v-row
            style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding-top: 25px"
          >
            <v-col
              cols="6"
              class="pa-0"
              style="font-size: 20px; font-weight: bold"
              >Total</v-col
            >
            <v-col
              cols="6"
              class="text-end pa-0"
              style="font-weight: 900; font-size: 20px"
            >
              ${{ totalPrice }}
            </v-col>
          </v-row>
        </div>
        <div class="mt-10 mb-10">
          <v-row>
            <v-col cols="6">
              <v-btn
                elevation="0"
                style="
                  width: 100%;
                  border: 1px solid black;
                  border-radius: 30px;
                  height: 50px;
                "
                class="checkout"
                @click="$router.push({ name: 'checkout' })"
              >
                Checkout
              </v-btn>
            </v-col>
            <v-col cols="6">
              <nuxt-link to="/shopping-cart">
                <v-btn
                  elevation="0"
                  style="
                    width: 100%;
                    border: 1px solid black;
                    border-radius: 30px;
                    height: 50px;
                  "
                  class="view-cart"
                  >View Cart</v-btn
                ></nuxt-link
              >
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="px-6" v-else>
        <p class="my-10 text-center" style="color: black">
          Your cart is currently empty.
        </p>
        <button
          class="w-100 pa-4 continue-shopping"
          style="border: 2px solid black; border-radius: 30px; color: black"
          @click="this.drawer = false"
        >
          Continue Shopping
        </button>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "~/stores/cart";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    totalPrice() {
      return `${this.cartItems.reduce(
        (total, product) =>
          total +
          Math.floor(
            product.price - (product.price * product.discountPercentage) / 100
          ) *
            product.quantity,
        0
      )}`;
    },
  },
  methods: {
    ...mapActions(cartStore, ["deleteItem", "getCartItems"]),
  },
  mounted() {
    this.$bus.$on("openCart", () => {
      this.drawer = true;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.continue-shopping {
  transition: 0.3s;
  font-weight: 500;
  font-size: 17px;
  &:hover {
    background-color: #0069d9;
    color: white !important;
    border-color: transparent !important;
  }
}
.nav-cart {
  width: 30% !important;
  padding: 32px 25px 0 !important;
  overflow-y: auto !important;
  @media (max-width: 1200px) {
    width: 40% !important;
  }
  @media (max-width: 991px) {
    width: 50% !important;
  }
  @media (max-width: 767px) {
    width: 85% !important;
    padding: 32px 12px 0 !important;
  }
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8d8d8d;
    border-radius: 30px;
  }
}
.v-navigation-drawer__content {
  overflow-y: unset !important;
  overflow-x: unset !important;
}

.v-navigation-drawer__scrim {
  opacity: 0.5 !important;
}
.v-navigation-drawer__scrim {
  position: fixed;
}
.checkout {
  background-color: #0069d9 !important;
  color: white !important;
  border: none !important;
}
</style>
