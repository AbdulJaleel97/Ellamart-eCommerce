<template>
  <div class="home">
    <HomeBannerFirst />
    <v-container fluid>
      <HomeFeaturesView />
    </v-container>
    <HomeSalesView />

    <HomeProductsSwiper
      :products="ProductsSwiper"
      title="Flash Deals"
      titleColor="red"
      :index="0"
    />

    <HomeShopByCategory />

    <HomeNewProducts
      :products="newProducts"
      title="New Products"
      titleColor="black"
      :index="1"
    />
    <HomeQualityFeatures />

    <HomeProductsSwiper
      :products="mobilePhones"
      title="Mobile Phones"
      titleColor="black"
      :index="0"
    />
    <HomeMobilesBanner />

    <HomeProductsSwiper
      :products="fragrances"
      title="Fragrances"
      titleColor="red"
      :index="3"
    />

    <img
      class="w-100 mt-10"
      src="@/assets/images/tv-banner.webp"
      alt="Banner"
    />

    <HomeProductsSwiper
      :products="groceries"
      title="Groceries"
      titleColor="black"
      :index="4"
    />

    <HomeProductsSwiper
      :products="skinCare"
      title="Skin Care"
      titleColor="red"
      :index="5"
    />
    <HomeWhyShop />
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(productsModule, [
      "ProductsSwiper",
      "newProducts",
      "mobilePhones",
      "fragrances",
      "groceries",
      "skinCare",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
    document.title = `Ellamart - Home`;
  },
};
</script>
