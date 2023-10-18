<template>
  <div :style="`display: ${$route.name == 'checkout' ? 'none' : 'block'}`">
    <v-navigation-drawer
      location="left"
      v-model="menu"
      class="menu"
      temporary
      disabled
    >
      <div class="text-center mb-6">
        <nuxt-link style="color: black; text-decoration: none" to="/">
          <img
            style="width: 130px"
            src="@/assets/images/small-nav-logo.webp"
            alt="Logo Img"
          />
        </nuxt-link>
      </div>
      <h4>Categories</h4>
      <ul class="menu-links" style="list-style: none">
        <li v-for="category in categories" :key="category.title">
          <nuxt-link
            class="category-link"
            style="color: black; text-decoration: none"
            :to="`/products/${category.route}`"
          >
            {{ category.title }}
          </nuxt-link>
        </li>
      </ul>
      <div class="py-8" style="border-bottom: 1px solid rgb(0, 0, 0, 0.1)">
        <div style="font-size: 14px" class="mb-5">
          Available 24/7 at
          <span style="font-size: 16px; font-weight: 500; cursor: pointer"
            >(+99) 123-456-789</span
          >
        </div>
        <div
          class="help d-flex align-center"
          style="padding-right: 15px; margin-right: 15px; cursor: pointer"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="user-headset"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-user-headset fa-w-14 fa-3x"
            style="width: 18px; color: black; margin-right: 6px; border: none"
          >
            <path
              fill="currentColor"
              d="M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z"
              class=""
            ></path>
          </svg>
          <span>Help</span>
        </div>
      </div>
      <div>
        <div class="py-7" style="border-bottom: 1px solid rgb(0, 0, 0, 0.1)">
          <h4 class="mb-3">Currency</h4>
          <v-row>
            <v-col cols="6" class="d-flex justify-start">
              <span>USD</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="
                  enable-background: new 0 0 512 512;
                  width: 20px;
                  margin-left: 6px;
                "
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
              >
                <circle
                  style="fill: #f0f0f0"
                  cx="256"
                  cy="256"
                  r="256"
                ></circle>
                <g>
                  <path
                    style="fill: #0052b4"
                    d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                  ></path>
                </g>
                <g>
                  <path
                    style="fill: #d80027"
                    d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                  ></path>
                </g>
              </svg>
            </v-col>
            <v-col cols="6" class="d-flex justify-start">
              <span>GBP</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="
                  enable-background: new 0 0 512 512;
                  width: 20px;
                  margin-left: 6px;
                "
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
              >
                <path
                  style="fill: #ffda44"
                  d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"
                ></path>
                <path
                  d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"
                ></path>
                <path
                  style="fill: #d80027"
                  d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"
                ></path>
              </svg>
            </v-col>
          </v-row>
        </div>
        <div class="pt-7">
          <h4 class="mb-3">Languages</h4>
          <v-row>
            <v-col cols="6" class="d-flex justify-start">
              <span>GBP</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="
                  enable-background: new 0 0 512 512;
                  width: 20px;
                  margin-left: 6px;
                "
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
              >
                <path
                  style="fill: #ffda44"
                  d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"
                ></path>
                <path
                  d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"
                ></path>
                <path
                  style="fill: #d80027"
                  d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"
                ></path>
              </svg>
            </v-col>
            <v-col cols="6" class="d-flex justify-start">
              <span>USD</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="
                  enable-background: new 0 0 512 512;
                  width: 20px;
                  margin-left: 6px;
                "
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
              >
                <circle
                  style="fill: #f0f0f0"
                  cx="256"
                  cy="256"
                  r="256"
                ></circle>
                <g>
                  <path
                    style="fill: #0052b4"
                    d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                  ></path>
                </g>
                <g>
                  <path
                    style="fill: #d80027"
                    d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                  ></path>
                </g>
              </svg>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from "~/stores/products";
import { mapState } from "pinia";
export default {
  data: () => ({
    menu: false,
  }),
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  mounted() {
    this.$bus.$on("openMenu", () => {
      this.menu = true;
    });
  },
};
</script>

<style lang="scss">
.v-toolbar__content {
  height: auto !important;
  padding: 10px 0;
}
.menu {
  padding: 20px;
  width: 40% !important;
  @media (max-width: 767px) {
    width: 60% !important;
  }
  @media (max-width: 420px) {
    width: 75% !important;
  }
  ul {
    li {
      padding: 12px 0;
      font-size: 15px;
      & {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
