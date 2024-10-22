import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    productDetails: [],
    ProductsSwiper: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    groceries: [],
    skinCare: [],
    categoryProducts: [],
    categories: [
      {
        title: "Smart-Phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Sunglasses",
        route: "sunglasses",
      },
      {
        title: "Automotive",
        route: "automotive",
      },
      {
        title: "Tops",
        route: "tops",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          // Products Swiper
          this.ProductsSwiper = res.data.products.slice(0, 8);
          // Laptops
          this.newProducts = res.data.products.filter(
            (e) => e.category === "laptops"
          );
          // Mobile Phones
          this.mobilePhones = res.data.products.filter(
            (e) => e.category === "smartphones"
          );
          // Fragrances
          this.fragrances = res.data.products.filter(
            (e) => e.category === "fragrances"
          );
          // Groceries
          this.groceries = res.data.products.filter(
            (e) => e.category === "groceries"
          );
          // skincare
          this.skinCare = res.data.products.filter(
            (e) => e.category === "skincare"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(categories) {
      await axios
        .get(`https://dummyjson.com/products/category/${categories}`)
        .then((res) => (this.categoryProducts = res.data.products));
    },
    async singleProduct(id) {
      await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => (this.productDetails = res.data));
    },
  },
});
