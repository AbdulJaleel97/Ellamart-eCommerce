<template>
  <div class="checkout-parent">
    <v-container fluid class="ma-0 py-3 px-3">
      <v-row class="checkout-flex">
        <v-col class="left" cols="12" md="7">
          <div class="text-center">
            <nuxt-link to="/">
              <img
                class="logo-left"
                src="~/assets/images/footer-logo.webp"
                alt="LOGO!"
              />
            </nuxt-link>
          </div>
          <v-breadcrumbs
            class="px-0 py-2"
            :items="['Credit Payment', 'Finalization']"
            style="font-size: 14px"
          >
            <template v-slot:divider>
              <v-icon style="color: #5f5f5f">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <p style="font-size: 14px; text-align: center; color: grey">
            Express Checkout
          </p>
          <v-card-actions class="px-0" style="gap: 10px">
            <v-btn
              style="
                background-color: rgb(84 32 227);
                color: white;
                flex: 1;
                margin: 0;
              "
            >
              SHOP
              <svg
                class="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-shopify_pay"
              >
                <title id="pi-shopify_pay">Shop Pay</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                  fill="white"
                ></path>
                <path
                  d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z"
                  fill="rgb(84 32 227)"
                ></path>
              </svg>
            </v-btn>
            <v-btn style="background-color: #252525; flex: 1" class="px-0 ma-0">
              <svg width="41" height="17" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668 2.287c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568m11.853.262l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                    fill="#FFF"
                  />
                  <path
                    d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                    fill="#4285F4"
                  />
                  <path
                    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                    fill="#34A853"
                  />
                  <path
                    d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                    fill="#FABB05"
                  />
                  <path
                    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                    fill="#E94235"
                  />
                </g>
              </svg>
            </v-btn>
          </v-card-actions>
          <div
            style="
              position: relative;
              height: 1px;
              background-color: rgb(212, 212, 212);
              margin-top: 20px;
              margin-bottom: 20px;
            "
            class="or"
          ></div>
          <v-card-text class="pa-0">
            <div class="d-flex justify-space-between">
              <div style="font-weight: 700; font-size: 15px">Contact</div>
              <div>
                Have an account?
                <span
                  style="text-decoration: underline; color: rgb(58, 58, 253)"
                  >Log in
                </span>
              </div>
            </div>
            <div class="d-flex align-center pa-0 mt-2">
              <input
                type="email"
                placeholder="Email or Mobile Phone"
                style="
                  background-color: white;
                  outline: none;
                  flex: 1;
                  padding: 10px 7px 10px 12px;
                  border-radius: 8px 0 0 8px;
                  border: 1px solid rgb(210, 210, 210);
                  border-right: none;
                "
              />
              <label
                style="
                  background: #e2e2e2;
                  cursor: pointer;
                  color: black;
                  padding: 11px;
                  border-radius: 0 8px 8px 0;
                  font-weight: 600;
                "
                >Apply</label
              >
            </div>
            <div class="d-flex align-center mt-2">
              <input
                type="checkbox"
                id="email"
                style="cursor: pointer"
                checked
              />
              <label
                class="ml-3"
                for="email"
                style="color: grey; cursor: pointer"
                >Send email for news and offers</label
              >
            </div>
          </v-card-text>
          <v-card-text class="pa-0 my-3">
            <div style="font-weight: 700; font-size: 15px; margin-bottom: 10px">
              Delivery Method
            </div>
            <div>
              <label
                class="d-flex align-center pa-4"
                style="
                  border: 1px solid rgb(210, 210, 210);
                  border-bottom: none;
                  border-radius: 8px 8px 0 0;
                  cursor: pointer;
                "
                for="ship"
              >
                <input type="radio" id="ship" name="delivery" />
                <label class="ml-3" for="ship" style="cursor: pointer">
                  <i class="fa-solid fa-ship"></i> Shipment</label
                >
              </label>
              <label
                class="d-flex align-center pa-4"
                style="
                  border: 1px solid rgb(210, 210, 210);
                  border-radius: 0 0 8px 8px;
                  cursor: pointer;
                "
                for="pick"
              >
                <input type="radio" id="pick" name="delivery" />
                <label class="ml-3" for="pick" style="cursor: pointer">
                  <i class="fa-solid fa-dolly"></i> Pick up</label
                >
              </label>
            </div>
          </v-card-text>
          <v-card-text class="pa-0">
            <div style="font-weight: 700; font-size: 15px; margin-bottom: 10px">
              Shipping Address
            </div>
            <select
              class="w-100 mt-2"
              style="
                border: 1px solid rgb(231, 230, 230);
                outline: none;
                padding: 10px;
                color: grey;
                cursor: pointer;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }} +
              </option>
            </select>
            <div class="mb-3">
              <select
                class="mt-3"
                style="
                  border: 1px solid rgb(231, 230, 230);
                  outline: none;
                  padding: 10px;
                  width: 48%;
                  margin-right: 2%;
                  color: grey;
                  cursor: pointer;
                "
              >
                <option :value="city" v-for="city in cities" :key="city">
                  {{ city }}
                </option>
              </select>
              <input
                type="number"
                placeholder="Phone Number"
                style="
                  width: 48%;
                  margin-left: 2%;
                  border: 1px solid rgb(231, 230, 230);
                  padding: 10px;
                  outline: none;
                "
              />
            </div>
            <input
              type="text"
              placeholder="First Name"
              style="
                width: 48%;
                margin-right: 2%;
                border: 1px solid rgb(231, 230, 230);
                padding: 10px;
                outline: none;
              "
            />
            <input
              type="text"
              placeholder="Last Name"
              style="
                width: 48%;
                margin-left: 2%;
                border: 1px solid rgb(231, 230, 230);
                padding: 10px;
                outline: none;
              "
            />
            <input
              type="text"
              placeholder="Address"
              style="
                width: 100%;
                border: 1px solid rgb(231, 230, 230);
                padding: 10px;
                outline: none;
                margin-top: 12px;
              "
            />
            <input
              type="text"
              placeholder="Apartment, suit, etc. (Optional)"
              style="
                width: 100%;
                border: 1px solid rgb(231, 230, 230);
                padding: 10px;
                outline: none;
                margin-top: 12px;
              "
            />
          </v-card-text>
          <v-card-text class="pa-0 text-end mt-3">
            <v-btn
              elevation="0"
              density="0"
              style="
                text-transform: none;
                background: rgb(21 134 255);
                color: white;
                padding: 12px;
              "
              >Continue to Finalization</v-btn
            >
          </v-card-text>
        </v-col>
        <v-col
          class="right"
          cols="12"
          md="5"
          color="grey-lighten-3"
          style="height: 100vh; background-color: #eee"
        >
          <nuxt-link
            to="/"
            style="width: fit-content; display: block; margin: auto"
          >
            <img
              class="logo-right"
              src="~/assets/images/footer-logo.webp"
              alt="LOGO!"
            />
          </nuxt-link>
          <v-card
            elevation="0"
            v-for="product in cartItems"
            :key="product.id"
            style="
              background-color: transparent;
              display: flex;
              align-items: center;
              color: black;
              padding-top: 10px;
            "
          >
            <v-badge :content="product.quantity" color="grey-darken-1">
              <nuxt-link :to="`/product/${product.id}/${product.description}`">
                <img
                  width="100"
                  style="border-radius: 8px"
                  :src="product.thumbnail"
                  alt="Product Image"
                />
              </nuxt-link>
            </v-badge>
            <div class="product-text" style="flex: 1">
              <v-card-title>
                <nuxt-link
                  style="
                    white-space: normal;
                    font-size: 14px;
                    line-height: 1.6;
                    font-weight: 700;
                    color: black;
                    text-decoration: none;
                  "
                  :to="`/product/${product.id}/${product.description}`"
                >
                  ({{ product.title }}) Sample -
                  {{
                    product.category.charAt(0).toUpperCase() +
                    product.category.slice(1, -1)
                  }}
                  For Sale
                </nuxt-link>
              </v-card-title>
              <v-card-text
                style="font-size: 12px; font-style: italic; color: #5f5f5f"
                >{{ product.size }} / {{ product.color }}</v-card-text
              >
            </div>
            <v-card-text style="flex-grow: 0; font-weight: 500">
              ${{
                Math.ceil(
                  product.price -
                    (product.price * product.discountPercentage) / 100
                ) * product.quantity
              }}
            </v-card-text>
          </v-card>
          <v-card-text class="d-flex align-center pa-0 mt-10">
            <input
              type="text"
              placeholder="Discount Code"
              style="
                background-color: white;
                outline: none;
                flex: 1;
                padding: 10px 7px 10px 12px;
                border-radius: 8px;
                border: 1px solid rgb(210, 210, 210);
              "
            />
            <label
              style="
                background: #bebebe;
                cursor: pointer;
                color: white;
                padding: 10px;
                margin-left: 10px;
                border-radius: 8px;
                font-weight: 600;
              "
              >Apply</label
            >
          </v-card-text>
          <v-card-text class="pa-0">
            <div class="d-flex justify-space-between mt-5">
              <span>Subtotal</span>
              <span style="font-weight: 600">${{ totalPrice }}</span>
            </div>
            <div class="d-flex justify-space-between my-2">
              <span>Shipping</span>
              <span>$20</span>
            </div>
            <div class="d-flex justify-space-between" style="font-weight: 700">
              <span>Total</span>
              <span>${{ totalPrice + 20 }}</span>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "~/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    countries: ["Egypt", "Saudi Arabia", "Qatar", "Syria", "UAE", "Bahrin"],
    cities: ["Elzawya-City", "Cairo", "Ryiadh", "Giza", "Abyss"],
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    totalPrice() {
      return this.cartItems.reduce((acc, curr) => {
        return (
          acc +
          Math.ceil(curr.price - (curr.price * curr.discountPercentage) / 100) *
            curr.quantity
        );
      }, 0);
    },
  },
  methods: {
    ...mapActions(cartStore, ["deleteItem", "getCartItems"]),
  },
  mounted() {
    this.getCartItems();
    document.title = "Checkout - Ellamart";
  },
};
</script>

<style lang="scss">
.logo-right {
  display: none;
}
.checkout-flex {
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    .right,
    .left {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    .logo-left {
      display: none;
    }
    .logo-right {
      display: block;
      margin: 20px auto;
    }
  }
}
.right,
.left {
  padding-top: 50px;
  padding-bottom: 0;
}
.right {
  padding-left: 40px;
  padding-right: 180px;
  @media (max-width: 1400px) {
    padding-right: 90px;
  }
  @media (max-width: 1200px) {
    padding-right: 16px;
    padding-left: 16px;
  }
}
.left {
  padding-right: 40px;
  padding-left: 180px;
  @media (max-width: 1400px) {
    padding-left: 90px;
  }
  @media (max-width: 1200px) {
    padding-right: 16px;
    padding-left: 16px;
  }
}
.v-card .v-card-title {
  line-height: 1rem !important;
}
.v-field--variant-outlined .v-field__outline {
  border-width: 0 !important;
}
.or::before {
  content: "OR";
  position: absolute;
  left: 50%;
  top: 50%;
  background: white;
  font-size: 13px;
  padding: 10px;
  color: grey;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
</style>
