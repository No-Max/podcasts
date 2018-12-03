<template>
  <div class="category-list">
    <router-link class="list-title" to="/categories">Categories</router-link>
    <div class="category-items">
      <a href="#" class="category-item">
        <div>
          <i class="icons icon-diy"></i>
          <span>diy</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div style="text-align: center">
          <i class="icons icon-music"></i>
          <span>Music</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div>
          <i class="icons icon-pc"></i>
          <span>it</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div style="text-align: center">
          <i class="icons icon-innovation"></i>
          <span>science</span>
        </div>
      </a>
      <a href="#" class="category-item active">
        <div style="text-align: center">
          <i class="icons icon-medal"></i>
          <span>spоrt</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div style="text-align: center">
          <i class="icons icon-translation"></i>
          <span>Language</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div style="text-align: center">
          <i class="icons icon-intelligence"></i>
          <span>Productivity</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div style="text-align: center">
          <i class="icons icon-intelligence"></i>
          <span>Productivity</span>
        </div>
      </a>
      <a href="#" class="category-item">
        <div style="text-align: center">
          <i class="icons icon-intelligence"></i>
          <span>Productivity</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">
  .category-list {
    height: 540px;
    width: 570px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    color: #647588;
    .list-title {
      display: block;
      padding-top: 35px;
      padding-left: 70px;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 45px;
      text-transform: uppercase;
    }
    .category-items {
      padding-left: 70px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .category-item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 135px;
      height: 135px;
      border-radius: 3px;
      font-family: "Ropa Sans";
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 18px;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      transition: background-color 0.3s;
      span {
        display: block;
        padding-top: 6px;
      }
      &:hover,
      &.active {
        background-color: #ff6b29;
        color: #fff;
      }
    }
  }

</style>
