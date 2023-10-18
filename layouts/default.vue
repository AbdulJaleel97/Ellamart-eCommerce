<template>
  <globally-app-layout>
    <router-view />
    <GloballyQuickView />
    <v-snackbar v-model="snackBar" location="left bottom" timeout="2000">
      "{{ itemTitle }}" Added Successfully
      <template v-slot:actions>
        <v-icon @click="snackBar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </globally-app-layout>
</template>

<script>
export default {
  data: () => ({
    snackBar: false,
    itemTitle: "",
  }),
  mounted() {
    this.$bus.$on("openMsg", (data) => {
      this.itemTitle = data;
      this.snackBar = true;
    });
  },
};
</script>

<style lang="scss">
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  display: none;
  margin: 0;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}
</style>
