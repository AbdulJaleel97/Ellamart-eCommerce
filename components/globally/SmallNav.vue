<template>
  <div class="small-nav">
    <v-app-bar temporary class="px-5">
      <v-row>
        <v-col cols="2">
          <div style="font-size: 20px; cursor: pointer" @click="openMenu()">
            <i class="fa-solid fa-bars"></i>
          </div>
        </v-col>
        <v-col cols="8" class="justify-center">
          <nuxt-link to="/">
            <img
              style="width: 130px"
              src="@/assets/images/small-nav-logo.webp"
              alt="Logo Img"
            />
          </nuxt-link>
        </v-col>
        <v-col
          cols="2 justify-end position-relative"
          style="cursor: pointer"
          @click="this.$route.name != 'shoppingcart' ? openCart() : false"
        >
          <svg
            data-v-531a3f24=""
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            style="fill: black; width: 30px"
          >
            <path
              data-v-531a3f24=""
              class="path1"
              d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
            ></path>
            <path
              data-v-531a3f24=""
              class="path2"
              d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
            ></path>
            <path
              data-v-531a3f24=""
              class="path3"
              d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
            ></path>
          </svg>
          <span
            v-if="cartItems.length > 0"
            style="
              top: 6px;
              right: 6px;
              width: 22px;
              height: 22px;
              background: rgb(35, 76, 238);
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              font-size: 13px;
              position: absolute;
            "
          >
            {{ cartItems.length }}
          </span>
        </v-col>
        <v-col cols="12" style="border-top: 1px solid rgb(0, 0, 0, 0.1)">
          <input
            type="text"
            placeholder="Search for product"
            style="font-size: 13px; outline: none; width: 95%"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    openMenu() {
      this.$bus.$emit("openMenu");
    },
    openCart() {
      this.$bus.$emit("openCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.small-nav {
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
}
.v-row > div {
  display: flex;
  align-items: center;
}
</style>
