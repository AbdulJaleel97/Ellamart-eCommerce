<template>
  <div class="app-layout">
    <v-layout class="position-relative">
      <MenuView />
      <CartDrawer />
      <v-main class="main-layout">
        <slot></slot>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script setup>
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
import MenuView from "./MenuView.vue";
import AppFooter from "./AppFooter.vue";
</script>

<style lang="scss">
.main-layout {
  padding-top: 128px !important;
  @media (max-width: 991px) {
    padding-top: 94px !important;
  }
}
</style>
