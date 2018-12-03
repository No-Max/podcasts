<template>
  <div class="main-page">
    <CategoryMain/>
    <div class="category-conatainer">
      <CategoryList/>
      <CategoryFavourite/>
      <Copyright/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMain from '@/components/CategoryMain.vue'
import CategoryList from '@/components/CategoryList.vue'
import CategoryFavourite from '@/components/CategoryFavourite.vue'
import Copyright from '@/components/Copyright.vue'

export default {
  name: 'home',
  components: {
    CategoryMain,
    CategoryList,
    CategoryFavourite,
    Copyright
  }
}
</script>
<style lang="scss">
.main-page {
  height: 100%;
  overflow: hidden;
  .category-title {
    font-family: "Oswald";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 57px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #fff;
    padding-bottom: 20px;
  }
  .category-conatainer {
    height: 350px;
    position: relative;
  }
}
</style>
