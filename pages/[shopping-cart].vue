<template>
  <div class="cart">
    <v-container fluid class="pb-15">
      <v-row>
        <v-col cols="12" class="py-0 mt-15">
          <v-breadcrumbs
            :items="['Home', 'Shopping Cart']"
            style="font-size: 13px; padding: 0"
          >
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12">
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
                z-index: 3;
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
        </v-col>
        <v-col cols="12" md="9" v-if="cartItems.length > 0">
          <div class="titles">
            <div class="first">PRODUCT</div>
            <div class="second">PRICE</div>
            <div class="third">QUANTITY</div>
            <div class="fourth">TOTAL</div>
          </div>
          <div class="products">
            <div
              class="item"
              v-for="(product, i) in cartItems"
              :key="product.id"
            >
              <div class="one">
                <div class="img d-flex align-center">
                  <img :src="product.thumbnail" :alt="product.title" />
                </div>
                <div class="text">
                  <span style="font-weight: bold"> {{ product.title }}</span>
                  <p>{{ product.description }}</p>
                </div>
              </div>
              <div class="two">
                <span class="after-discount"
                  >{{
                    `$${Math.floor(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )}.00 `
                  }}
                </span>
              </div>
              <div class="three">
                <div class="quantity">
                  <label>Quantity</label>
                  <div
                    class="quantity-btns"
                    style="
                      border: 1px solid rgb(202, 202, 202);
                      border-radius: 30px;
                      padding: 5px;
                    "
                  >
                    <button
                      style="color: rgb(202, 202, 202)"
                      @click="
                        {
                          product.quantity > 1 ? product.quantity-- : true;
                        }
                      "
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="number" v-model="product.quantity" />
                    <button
                      style="color: rgb(202, 202, 202)"
                      @click="
                        {
                          product.quantity++;
                        }
                      "
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="four text-end">
                <div class="four-total">Total</div>
                <div class="mb-1">
                  {{
                    `$${
                      Math.floor(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      ) * product.quantity
                    }`
                  }}
                </div>
                <button class="delete" @click="deleteItem(product.id)">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>

          <div v-if="cartItems.length > 0">
            <div class="gift mb-8">
              <i class="fa-solid fa-gift"></i> DO YOU WANT A GIFT WRAP?
              <span style="font-weight: bold">ONLY FOR $10.00 </span>
              <button
                style="
                  padding: 3px 13px;
                  border-radius: 30px;
                  border: 1px solid rgb(231, 230, 230);
                  font-size: 12px;
                  font-weight: bold;
                  margin-left: 5px;
                "
              >
                Add
              </button>
            </div>
            <div class="comment">
              <p class="mb-2 font-weight-bold">Additional Comments</p>
              <textarea
                placeholder="Special instruction for seller"
                style="
                  width: 60%;
                  height: 110px;
                  border: 1px solid rgb(231, 230, 230);
                  border-radius: 30px;
                  resize: none;
                  padding: 15px;
                  margin-bottom: 15px;
                "
              ></textarea>
              <div>
                <i class="fa-solid fa-shield mr-3"></i>
                <span style="color: rgb(120 120 120)"
                  >Secure shopping guarantee</span
                >
              </div>
              <div class="mt-4">
                <img
                  style="max-width: 270px"
                  src="@/assets/images/cart-page-cards.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3" v-if="cartItems.length > 0">
          <p
            style="
              padding-bottom: 25px;
              font-size: 15px;
              margin-top: 0;
              font-weight: 500;
              border-bottom: 1px solid rgb(231, 230, 230);
            "
          >
            ORDER SUMMARY
          </p>
          <div
            class="d-flex justify-space-between"
            style="
              font-weight: 500;
              margin: 35px 0 20px 0;
              padding-bottom: 20px;
              border-bottom: 1px solid rgb(231, 230, 230);
            "
          >
            <p>Subtotal:</p>
            <span>${{ totalPrice }}</span>
          </div>
          <div class="shipping">
            <p>Get Shipping Estimate</p>
            <select
              class="w-100 mt-2"
              style="
                border: 1px solid rgb(231, 230, 230);
                outline: none;
                padding: 10px;
                color: grey;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <select
              class="mt-3"
              style="
                border: 1px solid rgb(231, 230, 230);
                outline: none;
                padding: 10px;
                width: 60%;
                margin-right: 1%;
                color: grey;
              "
            >
              <option :value="city" v-for="city in cities" :key="city">
                {{ city }}
              </option>
            </select>
            <input
              type="number"
              placeholder="Postal Code"
              style="
                width: 38%;
                margin-left: 1%;
                border: 1px solid rgb(231, 230, 230);
                padding: 10px;
                outline: none;
              "
            />
          </div>
          <div class="my-5">
            <button
              class="calc-shipping"
              style="
                border: 1px solid black;
                text-align: center;
                padding: 10px;
                border-radius: 30px;
                transition: 0.3s;
                width: 100%;
              "
            >
              Calculate Shipping
            </button>
          </div>
          <v-divider class="mt-6 mb-4 w-100"></v-divider>
          <div>
            <p class="mb-2">Coupon Code:</p>
            <input
              type="number"
              placeholder="Enter Coupon Code"
              style="
                width: 100%;
                border: 1px solid rgb(231, 230, 230);
                padding: 10px;
                outline: none;
              "
            />
            <p class="mt-2" style="font-size: 14px; color: grey">
              Coupon code will be applied on the checkout page
            </p>
          </div>
          <v-divider class="my-6 w-100"></v-divider>
          <div class="total d-flex justify-space-between align-center">
            <p>Total</p>
            <span style="font-weight: 800">${{ totalPrice }}</span>
          </div>
          <div>
            <div>
              <nuxt-link
                to="/checkout"
                elevation="0"
                style="
                  width: 100%;
                  border-radius: 30px;
                  height: 50px;
                  transition: 0 !important;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  text-decoration: none;
                "
                class="checkout my-5"
                @click="checkOut()"
              >
                Proceed to Checkout
              </nuxt-link>
            </div>
            <div>
              <nuxt-link
                to="/"
                elevation="0"
                style="
                  width: 100%;
                  border-radius: 30px;
                  height: 50px;
                  transition: 0s !important;
                  color: white;
                  border: 1px solid black;
                  background-color: #252525;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  text-decoration: none;
                "
                class="continue-shopping mt-0 mb-2"
              >
                Continue Shopping
              </nuxt-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" v-else style="margin: 20px 0">
          <p class="mt-10" style="color: black">
            Your cart is currently empty.
          </p>
          <p class="my-5" v-if="cartItems.length <= 0">
            <span style="font-weight: bold">$10000</span>
            purchases guarantee a
            <span style="font-weight: bold"> free shipping! </span>
          </p>
          <button
            class="continue-shopping text-center"
            style="
              border: 2px solid black;
              border-radius: 30px;
              color: black;
              max-width: fit-content;
              display: block;
              margin: auto;
              padding: 8px 60px;
              background-color: #0069d9;
              color: white;
              border: none;
            "
            @click="this.drawer = false"
          >
            Continue Shopping
          </button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "~/stores/cart";
import { mapState, mapActions } from "pinia";
export default {
  data: () => ({
    countries: ["Egypt", "Saudi Arabia", "Qatar", "Syria", "UAE", "Bahrin"],
    cities: ["Elzawya-City", "Cairo", "Ryiadh", "Giza", "Abyss"],
  }),
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
    ...mapActions(cartStore, ["deleteItem", "setToLocalStorage"]),
    checkOut() {
      this.setToLocalStorage();
      this.$route.push({ name: "checkout" });
    },
  },
  mounted() {
    document.title = `Shopping Cart - Ella`;
  },
  // watch: {
  //   cartItems: {
  //     handler(newVal, oldVal) {
  //       if (newVal.length == 0) {
  //         this.$router.push("/");
  //       }
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.cart {
  padding-left: 60px;
  padding-right: 60px;
  @media (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
  .titles {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 20px;
    font-weight: 500;
    padding: 0 10px 25px 10px;
    border-bottom: 1px solid #e5e5e5;
    .second,
    .third {
      text-align: center;
    }
    .fourth {
      text-align: end;
    }
    @media (max-width: 767px) {
      & {
        grid-template-columns: 1fr 1fr;
        .fourth,
        .third {
          display: none;
        }
        .second {
          text-align: end;
        }
      }
    }
  }
  .products {
    margin-bottom: 40px;
    .item {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr;
      gap: 20px;
      padding: 30px 20px;
      border-bottom: 1px solid #e5e5e5;
      .one {
        display: flex;
        .img {
          margin-right: 15px;
          @media (max-width: 767px) {
            align-items: start !important;
          }
          img {
            width: 100px;
          }
        }
        .text {
          a {
            display: block;
            color: var(--bg-color);
            font-weight: 500;
            font-size: 17px;
            margin-bottom: 12px;
          }
          p {
            color: #626262;
          }
        }
      }
      .two {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
          text-align: end;
        }
        .after-discount {
          font-weight: 500;
          font-size: 17px;
          margin-right: 10px;
        }
      }
      .three {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
          text-align: end;
        }
        .quantity {
          @media (max-width: 991px) {
            label {
              display: block;
            }
          }
          label {
            margin-right: 25px;
            font-weight: 500;
            display: none;
            @media (max-width: 767px) {
              display: block;
              margin: 18px 22px 5px 0;
              margin-right: 22px;
              margin-bottom: 5px;
            }
          }
          .quantity-btns {
            input {
              border: none;
              outline: none;
              width: 27px;
              text-align: center;
            }
            button {
              border: none;
              background-color: white;
              padding: 1px 10px;
              i {
                pointer-events: none;
              }
            }
          }
          .delete {
            border: none;
            background-color: transparent;
            margin-left: 10px;
            padding: 5px 10px;
            background-color: #e5e5e5;
            border-radius: 6px;
            &:hover {
              color: red;
            }
            i {
              pointer-events: none;
            }
          }
        }
      }
      .four {
        font-size: 17px;
        font-weight: 500;
        display: flex;
        justify-content: end;
        align-items: center;
        @media (max-width: 767px) {
          flex-direction: column;
          align-items: end !important;
        }
        .four-total {
          display: none;
          @media (max-width: 767px) {
            display: block;
          }
        }
        .delete {
          border: none;
          background-color: transparent;
          margin-left: 10px;
          padding: 5px 10px;
          background-color: #e5e5e5;
          border-radius: 6px;
          &:hover {
            color: red;
          }
          i {
            pointer-events: none;
          }
        }
      }
      @media (max-width: 767px) {
        & {
          padding-left: 0;
          padding-right: 0;
          grid-template-columns: 3fr 1fr;
          .two {
            justify-content: end;
            align-items: start;
          }
          .four {
            margin-right: 10px;
          }
        }
      }
    }
  }
  textarea {
    outline: none;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }
}
.calc-shipping:hover {
  background-color: #0069d9;
  color: white;
  border-color: transparent !important;
}
.continue-shopping:hover {
  background-color: #0069d9 !important;
}
</style>
