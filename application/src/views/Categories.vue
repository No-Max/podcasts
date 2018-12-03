<template>
  <div class='categories-container'>
    <div class="categories-title">
      Top 5 rated
    </div>
    <div class="top-5-container">
      <a href="#" class="top-5-item"><img src="img/content/top5/1.png" alt=""></a>
      <a href="#" class="top-5-item"><img src="img/content/top5/2.png" alt=""></a>
      <a href="#" class="top-5-item"><img src="img/content/top5/3.png" alt=""></a>
      <a href="#" class="top-5-item"><img src="img/content/top5/4.png" alt=""></a>
      <a href="#" class="top-5-item"><img src="img/content/top5/5.png" alt=""></a>
    </div>
    <div class="categories-title">
      ALL PODCASTS
    </div>
    <div class="all-container">
      <div class="all-item"><a href=""><img src="img/content/top5/1.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/2.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/3.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/4.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/5.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/1.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/2.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/3.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/4.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/5.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/1.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/2.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/3.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/4.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/5.png" alt=""></a></div>
      <div class="all-item"><a href=""><img src="img/content/top5/1.png" alt=""></a></div>
    </div>
  </div>
</template>
<style lang="scss">
  .categories-container{
    background-color: #E5E5E5;
    height: 100%;
    overflow-y: auto;
    padding: 0 40px;
    padding-top: 15px;
    .categories-title{
      display: block;
      margin-top: 60px;
      font-family: "Oswald";
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 28px;
      text-transform: uppercase;
    }
    .top-5-container{
      padding-top: 15px;
      display: flex;
      .top-5-item{
        flex-grow: 1;
        margin: 0 15px;
        img{
          width: 100%;
          border-radius: 3px;
          transition: 0.25s;
        }
        &:hover{
          img{
            box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
          }
        }
      }
    }
    .all-container{
      display: grid;
      width: 100%;
      height:53.5vw;
      grid-template-columns: 18.65% 18.65% 9.7% 9.7% 8.2% 7% 7% 7% 14.1%;
      grid-template-rows: 25% 8.2% 3.2% 12.4% 1.2% 25% 7.9% 17.1%;
      .all-item{
        padding: 5px;
        transition: padding 0.2s;
        img{
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
        &:hover{
          padding: 15px;
        }
      }
      .all-item:nth-child(1){
        grid-row: 1 / 3;
      }
      .all-item:nth-child(2){
        grid-row: 1 / 3;
      }
      .all-item:nth-child(3){
        grid-row: 1 / 5;
        grid-column: 3 / 6;
      }
      .all-item:nth-child(4){
        grid-row: 1 / 4;
        grid-column: 6 / 9;
      }
      .all-item:nth-child(6){
        grid-row: 2 / 6;
        grid-column: 9 / 10;
      }
      .all-item:nth-child(7){
        grid-row: 3 / 9;
        grid-column: 1 / 3;
      }
      .all-item:nth-child(11){
        grid-row: 5 / 8;
        grid-column: 3 / 5;
      }
      .all-item:nth-child(12){
        grid-row: 5 / 9;
        grid-column: 5 / 9;
      }
      .all-item:nth-child(13){
        grid-row: 6 / 7;
        grid-column: 9 / 10;
      }
      .all-item:nth-child(14){
        grid-row: 7 / 9;
        grid-column: 9 / 10;
      }
    }
  }
</style>
