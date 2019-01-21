<template>
  <div id="app" class="wrapper" :class="routeName + '-page'">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default{
  name: 'App',
  components: {
    Header
  },
  computed: {
    routeName () {
      return this.$root._route.name
    }
  }
}
</script>

<style lang="scss">
  .wrapper{
    height: 100%;
    position: relative;
  }
</style>
