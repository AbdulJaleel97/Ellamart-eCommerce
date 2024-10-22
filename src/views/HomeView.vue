<template>
  <div class="home">
    <BannerFirst />
    <FeaturesView />
    <SalesView />

    <ProductsSwiper
      :products="ProductsSwiper"
      title="Flash Deals"
      titleColor="red"
    />

    <ShopByCategory />

    <NewProducts
      :products="newProducts"
      title="New Products"
      titleColor="black"
    />
    <QualityFeatures />

    <ProductsSwiper
      :products="mobilePhones"
      title="Mobile Phones"
      titleColor="black"
    />
    <MobilesBanner />

    <ProductsSwiper
      :products="fragrances"
      title="Fragrances"
      titleColor="red"
    />

    <img
      class="w-100 mt-10"
      src="@/assets/images/tv-banner.webp"
      alt="Banner"
    />

    <ProductsSwiper
      :products="groceries"
      title="Groceries"
      titleColor="black"
    />

    <ProductsSwiper :products="skinCare" title="Skin Care" titleColor="red" />
    <WhyShop />
  </div>
</template>

<script>
import BannerFirst from "@/components/Home/BannerFirst.vue";
import FeaturesView from "@/components/Home/FeaturesView.vue";
import SalesView from "@/components/Home/SalesView.vue";
import ProductsSwiper from "@/components/Home/ProductsSwiper.vue";
import ShopByCategory from "@/components/Home/ShopByCategory.vue";
import NewProducts from "@/components/Home/NewProducts.vue";
import QualityFeatures from "@/components/Home/QualityFeatures.vue";
import MobilesBanner from "@/components/Home/MobilesBanner.vue";
import WhyShop from "@/components/Home/WhyShop.vue";

import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    BannerFirst,
    FeaturesView,
    SalesView,
    ProductsSwiper,
    ShopByCategory,
    NewProducts,
    QualityFeatures,
    MobilesBanner,
    WhyShop,
  },
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
