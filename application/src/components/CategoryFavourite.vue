<template>
  <div class="category-favourite">
    <div
      class="favourite-item"
      style="background-image:url('img/content/podcasts/podcast-3/tommy-bebo-600358-unsplash.png')"
    >
      <a href="#" class="category-title">BAsketball</a>
    </div>
    <div
      class="favourite-item"
      style="background-image:url('img/content/podcasts/podcast-2/neonbrand-428982-unsplash.png')"
    >
      <a href="#" class="category-title">fights</a>
    </div>
    <div
      class="favourite-item"
      style="background-image:url('img/content/podcasts/podcast-3/tommy-bebo-600358-unsplash.png')"
    >
      <a href="#" class="category-title">BAsketball</a>
    </div>
    <div
      class="favourite-item see-more"
      style="background-image:url('img/content/bg/jeffrey-lin-691549-unsplash.png')"
    >
      <a href="#" class="see-more-shadow">
        <span>see
          <br>more
        </span>
        <span>
          <i class="icons icon-arrow-left"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryFavourite',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">
  .category-favourite {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: calc(100% - 570px);
    display: flex;
    .favourite-item {
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      &.see-more {
        display: block;
        width: 170px;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 40px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        .see-more-shadow {
          display: block;
          background-color: rgba(244, 244, 250, 0.8);
          width: 100%;
          height: 100%;
          padding-top: 100px;
          padding-left: 40px;
          padding-right: 25px;
          span {
            display: inline-block;
            padding-bottom: 12px;
          }
        }
      }
    }
  }
</style>
