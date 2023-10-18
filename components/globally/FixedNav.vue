<template>
  <div
    class="nav-fixed"
    :style="`display: ${
      height >= 70 ? 'block' : 'none'
    };z-index:51;position:relative`"
  >
    <v-app-bar color="#161880" style="border-bottom: 1px solid white">
      <v-row class="px-4">
        <v-col cols="2">
          <nuxt-link to="/">
            <img src="@/assets/images/logo.png" alt="LOGO" />
          </nuxt-link>
        </v-col>
        <v-col cols="9" class="d-flex align-center">
          <ul class="d-flex fixed-links text-white" style="list-style: none">
            <li v-for="category in categories" :key="category.title">
              <nuxt-link
                style="color: white; text-decoration: none"
                :to="`/products/${category.route}`"
                >{{ category.title }}</nuxt-link
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="1" class="d-flex justify-end align-center svgs-parent">
          <div class="cart d-flex flex-column align-center">
            <svg
              data-icon="search"
              viewBox="0 0 512 512"
              width="100%"
              height="100%"
              style="width: 25px"
            >
              <path
                d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5 S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9 C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
              />
            </svg>
          </div>
          <div
            class="cart d-flex flex-column align-center"
            @click="this.$route.name != 'shoppingcart' ? openCart() : false"
            style="cursor: pointer"
          >
            <v-badge
              location="right top"
              :content="cartItems.length"
              color="blue"
              offset-x="-13"
              v-if="cartItems.length"
            >
            </v-badge>
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              style="width: 25px"
            >
              <path
                class="path1"
                d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
              ></path>
              <path
                class="path2"
                d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
              ></path>
              <path
                class="path3"
                d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
              ></path>
            </svg>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
import { cartStore } from "@/stores/cart";

export default {
  data() {
    return {
      height: 0,
    };
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    handleScroll() {
      this.height = window.scrollY;
    },
    openCart() {
      this.$bus.$emit("openCart");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.nav-fixed {
  @media (max-width: 1100px) {
    display: none !important;
  }
}
.fixed-links {
  li:not(:first-child) {
    margin: 0 15px;
  }
  a {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 0;
      height: 3px;
      background-color: white;
      bottom: -5px;
      left: 0;
      transition: 0.15s;
    }
    &:hover::before {
      width: 100%;
    }
    &.nuxt-link-exact-active {
      color: rgb(255, 195, 36) !important;
      &::before {
        background-color: rgb(255, 195, 36);
      }
    }
  }
}
.svgs-parent > div {
  padding-left: 8px;
  border-left: 1px solid hsla(0, 9%, 85%, 0.199);
  margin-left: 10px;
}
svg {
  fill: white;
}
</style>
