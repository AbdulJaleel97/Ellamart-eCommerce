<template>
  <div class="why-shop pb-10 pt-4">
    <v-container fluid>
      <h2 class="text-white mb-10 text-center" style="font-size: 40px">
        <span style="color: #10ffda">Why Shop </span>
        with us?
      </h2>
      <v-row class="element">
        <v-col cols="6" md="3" class="text-white text-center">
          <img src="@/assets/images/free-shipping.png" alt="IMG" />
          <h3>Free Shipping on First order</h3>
          <p>Present suscipit mattis facilisis.</p>
          <span style="text-decoration: underline">Learn More</span>
        </v-col>
        <v-col cols="6" md="3" class="text-white text-center">
          <img src="@/assets/images/weekly-flash-sales.png" alt="IMG" />
          <h3>Weekly Flase Sale</h3>
          <p>Present suscipit mattis facilisis.</p>
          <span style="text-decoration: underline">Learn More</span>
        </v-col>
        <v-col cols="6" md="3" class="text-white text-center">
          <img src="@/assets/images/discount.png" alt="IMG" />
          <h3>Anual Payment Discount</h3>
          <p>Present suscipit mattis facilisis.</p>
          <span style="text-decoration: underline">Learn More</span>
        </v-col>
        <v-col cols="6" md="3" class="text-white text-center">
          <img src="@/assets/images/cash-back.png" alt="IMG" />
          <h3>Cashback Reward Program</h3>
          <p>Present suscipit mattis facilisis.</p>
          <span style="text-decoration: underline">Learn More</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
p {
  margin-bottom: 10px;
}
.why-shop {
  background-image: url("@/assets/images/why-shop-with-us-banner.webp");
  background-size: cover;
  background-repeat: repeat-x;
}
</style>
