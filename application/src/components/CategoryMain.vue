<template>
  <div
    class="main-category"
    style="background-image:url('img/content/podcasts/podcast-1/eerik-sandstrom-567001-unsplash.png')"
  >
    <div class="main-content">
      <a href="#" class="category-title">mountain bike racing</a>
      <div class="category-description">Mountain bike racing (shortened MTB or ATB racing) is the
        <br>competitive cycle sport discipline of mountain biking held on
        <br>off-road terrain. The Union Cycliste Internationale (UCI)
        <br>recognised the discipline relatively late in 1990, when it
        <br>sanctioned the world championships in Durango, Colorado.
      </div>
      <div class="category-buttons">
        <a href="#" class="btn btn-white circle">
          <span>
            <i class="icons icon-star"></i>
          </span>
        </a>
        <a href="#" class="btn btn-white">
          <span>
            start listen
            <i class="icons icon-play"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryMain',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">
  .main-category{
    height: calc(100% - 350px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .main-content{
      padding-right: 65px;
      text-align: left;
    }
    .category-buttons{
      padding-top: 40px;
      display: block;
      text-align: right;
      .btn{
        margin-left: 30px;
        .icon-play{
          padding-left: 18px;
        }
      }
    }
    .category-description{
      padding-top: 20px;
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 18px;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #fff;
    }
  }
</style>
