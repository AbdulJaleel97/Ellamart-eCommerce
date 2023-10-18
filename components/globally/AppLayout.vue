<template>
  <div class="app-layout">
    <v-layout class="position-relative">
      <GloballyMenuView />
      <GloballyCartDrawer />
      <v-main
        :class="`main-layout ${
          $route.name == 'checkout' ? 'padding-top' : 'null'
        }`"
      >
        <slot></slot>
        <GloballyAppFooter v-if="$route.name != 'checkout'" />
      </v-main>
      <GloballyAppNav v-if="$route.name != 'checkout'" />
      <GloballyFixedNav v-if="$route.name != 'checkout'" />
      <GloballySmallNav v-if="$route.name != 'checkout'" />
    </v-layout>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
.main-layout {
  &.padding-top {
    padding: 0;
  }
  @media (min-width: 1100px) {
    padding-top: 128px;
  }
  @media (max-width: 1100px) {
    padding-top: 94px;
  }
}
</style>
