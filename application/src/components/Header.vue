<template>
    <div class="header">
        <router-link class="logo" to="/">
          <img src="img/logo.png" alt="">
        </router-link>
        <div class="player-container">
          <HeaderSearch />
          <HeaderPlayer />
        </div>
    </div>
</template>

<script>
import HeaderPlayer from '@/components/HeaderPlayer.vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
export default {
  name: 'Header',
  components: {
    HeaderPlayer,
    HeaderSearch
  }
}
</script>

<style lang="scss">
  .header{
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    .logo{
      display: block;
      width: 45px;
      height: 100%;
      background-color: #F4F4FA;
      text-align: center;
      padding-top: 7px;
    }
    .player-container{
      background-color: #F4F4FA;
      display: flex;
      align-items: center;
      position: relative;
    }
  }
  .categories-page{
    .header{
      background-color: #fff;
      .logo, .player-container{
        background-color: transparent;
      }
    }
  }
</style>
