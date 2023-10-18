import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      let exists = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          this.cartItems[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("ella-cart", JSON.stringify(this.cartItems));
    },
    getCartItems() {
      if (localStorage.getItem("ella-cart")) {
        this.cartItems = JSON.parse(localStorage.getItem("ella-cart"));
      }
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == id) {
          this.cartItems.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("ella-cart", JSON.stringify(this.cartItems));
    },
    setToLocalStorage() {
      localStorage.setItem("ella-cart", JSON.stringify(this.cartItems));
    },
  },
});
