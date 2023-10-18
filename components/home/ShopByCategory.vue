<template>
  <div class="categories">
    <img
      style="max-width: 100%; width: 100%"
      src="@/assets/images/cyber-banner.webp"
      alt="Offer-Img"
    />
    <v-container fluid class="px-0">
      <div class="title ma-10">
        <h2>Shop By Categories</h2>
      </div>
      <div class="content text-center">
        <div v-for="(item, i) in category" :key="i">
          <img class="mb-4" style="cursor: pointer" :src="item.src" alt="" />
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    category: [
      {
        title: "Mobile Phones",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Latops & Tablets",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "Televisions",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PC's & Accessories",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen Appliances",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        src: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 80px;
  padding: 0 16px;
  @media (max-width: 1460px) {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 60px;
    column-gap: 0;
  }
  @media (max-width: 1220px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    overflow: hidden;
    overflow-x: scroll;
    img {
      width: 130px;
    }
  }
}
.title {
  @media (max-width: 767px) {
    margin: 0 16px 20px 16px !important;
  }
}
img:hover {
  & + h4 {
    color: rgb(33 36 215);
  }
}
h4:hover {
  color: rgb(33 36 215);
  cursor: pointer;
}
</style>
