<template>
  <div class="app-footer">
    <v-footer
      absolute
      style="border-top: 1px solid rgba(0, 0, 0, 0.1); bottom: 0"
    >
      <v-container fluid>
        <v-row class="mx-5 my-auto">
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="0">
              <v-card-title style="font-weight: bold; margin-bottom: 16px"
                >CATEGORIES</v-card-title
              >
              <v-card-text v-for="category in categories" :key="category.title">
                <nuxt-link
                  style="text-decoration: none"
                  :to="{
                    params: { category: category.route },
                  }"
                  >{{ category.title }}
                </nuxt-link>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="0">
              <v-card-title style="font-weight: bold; margin-bottom: 16px"
                >FURTHER INFO.</v-card-title
              >
              <v-card-text>About us</v-card-text>
              <v-card-text>Gift Certificates</v-card-text>
              <v-card-text>Theme Styles</v-card-text>
              <v-card-text>Contact us</v-card-text>
              <v-card-text>Blog</v-card-text>
              <v-card-text>Brands</v-card-text>
              <v-card-text>Sitemap</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="0">
              <v-card-title style="font-weight: bold; margin-bottom: 16px"
                >CUSTOMER SERVICE</v-card-title
              >
              <v-card-text>Help & FAQs</v-card-text>
              <v-card-text>Terms of Conditions</v-card-text>
              <v-card-text>Privacy Policy</v-card-text>
              <v-card-text>Online Returns Policy</v-card-text>
              <v-card-text>Rewards Program</v-card-text>
              <v-card-text>Rebate Center</v-card-text>
              <v-card-text>Partners</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="0" class="h-100">
              <v-card-title style="font-weight: bold; margin-bottom: 16px"
                ><img src="@/assets/images/footer-logo.webp" alt=""
              /></v-card-title>
              <v-card-text class="d-flex">
                <span class="mr-3">
                  <v-icon>mdi-map-marker</v-icon>
                </span>
                <span
                  >678 Market Street <br />
                  Elzawya Stores, Egypt</span
                >
              </v-card-text>
              <v-card-text class="d-flex">
                <span class="mr-3">
                  <v-icon>mdi-phone</v-icon>
                </span>
                <span>Call us at (+20) 1100800030</span>
              </v-card-text>
              <v-card-text class="d-flex">
                <span class="mr-3">
                  <v-icon>mdi-email</v-icon>
                </span>
                <span>example@gmail.com</span>
              </v-card-text>
              <v-card-text class="d-flex" style="gap: 14px; font-size: 22px">
                <v-icon style="cursor: pointer">mdi-facebook</v-icon>
                <v-icon style="cursor: pointer">mdi-twitter</v-icon>
                <v-icon style="cursor: pointer">mdi-instagram</v-icon>
                <v-icon style="cursor: pointer">mdi-youtube</v-icon>
                <v-icon style="cursor: pointer">mdi-pinterest</v-icon>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div
        class="me text-center"
        style="
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding-top: 8px;
          background-color: #fff;
        "
      >
        <div>
          &copy;{{ new Date().getFullYear() }}
          <a
            href="https://www.youtube.com/@programmerhallucination-ox4fv"
            target="_blank"
          >
            Ahmed Elmasry
          </a>
        </div>
        <div>
          Made by
          <a href="https://abduljaleel-portfolio.netlify.app/"
            >AbdulJaleel Mohammad</a
          >
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>

<style lang="scss" scoped>
.v-footer {
  display: block;
  padding-right: 0;
  padding-left: 0;
}
.v-card-text {
  font-weight: 500;
}
.v-container {
  width: 100%;
  padding: 0 16px;
}
.v-row {
  > div:not(:last-child) {
    @media (max-width: 600px) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
.v-card-text {
  padding: 0 0 16px 16px;
}
.me {
  a {
    text-decoration: none;
  }
}
a {
  color: black;
  &.nuxt-link-exact-active {
    color: rgb(0 4 225);
  }
}
i {
  transition: 0.3s;
  cursor: pointer;
}
.mdi-facebook:hover {
  color: #1877f2;
}
.mdi-twitter:hover {
  color: #1d9bf0;
}
.mdi-instagram:hover {
  color: #fd3e8e;
}
.mdi-youtube:hover {
  color: red;
}
.mdi-pinterest:hover {
  color: #31e931;
}
</style>
