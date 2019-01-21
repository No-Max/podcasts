<template>
    <div class="header-player">
      <button class="play-btn" @click="playPauseTrigger()">
        <svg v-if="playPause" width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.5" y1="1.5" x2="1.5" y2="18.5" stroke="#647588" stroke-width="3" stroke-linecap="round"/>
          <line x1="13.5" y1="1.5" x2="13.5" y2="18.5" stroke="#647588" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <svg v-if="!playPause" width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7509 11.549L0.869612 0.59638C0.701489 0.48083 0.483532 0.468782 0.303908 0.562427C0.123737 0.657168 0.0109253 0.843363 0.0109253 1.04708V22.9524C0.0109253 23.1561 0.123737 23.3428 0.303908 23.4376C0.383863 23.4792 0.471484 23.5 0.558557 23.5C0.667536 23.5 0.775967 23.4671 0.869612 23.4031L16.7509 12.4504C16.8994 12.348 16.9875 12.1799 16.9875 11.9997C16.9875 11.8196 16.8988 11.6514 16.7509 11.549Z" fill="#647588"/>
        </svg>
      </button>
      <div class="track-progress">
        <div class="track-name">
          radio t - 619
        </div>
        <range-slider
          class="slider"
          min="0"
          max="100"
          step="2"
          v-model="sliderValue">
        </range-slider>
      </div>
      <div class="track-img">
        <img src="img/content/podcasts/podcast-4/small.png" alt="radio t - 619">
      </div>
    </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
export default {
  name: 'HeaderPlayer',
  components: {
    RangeSlider
  },
  data () {
    return {
      playPause: false,
      sliderValue: 22
    }
  },
  methods: {
    playPauseTrigger () {
      this.playPause = !this.playPause
    }
  }
}
</script>

<style lang="scss">
  .header-player{
    width: 350px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .play-btn{
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    width: 30px;
    height: 100%;
    padding-top: 3px;
    padding-left: 15px;
  }
  .track-progress{
    align-items: center;
  }
  .track-img{
    height: 100%;
    img{
      height: 100%;
    }
  }
  .track-name{
    color: #647588;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    text-transform: uppercase;
    padding-top: 4px;
    margin-bottom: -5px;
  }
  .range-slider {
    display: inline-block;
    height: 15px;
    width: 230px;
  }
  .range-slider.disabled {
    opacity: 0.5;
  }
  .range-slider-inner {
    display: inline-block;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .range-slider-rail,
  .range-slider-fill {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    height: 3px;
    transform: translateY(-50%);
  }
  .range-slider-rail {
    width: 100%;
    background-color: #E5E5E5;
  }
  .range-slider-fill {
    background-color: #FF6B29;
  }
  .range-slider-knob {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    box-sizing: border-box;
    height: 7px;
    width: 14px;
    border: 1px solid #f5f5f5;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    transform: translate(-50%, -50%);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .range-slider:hover,
  .range-slider:active{
    .range-slider-knob{
      opacity: 1;
    }
  }
  .range-slider-hidden {
    display: none;
  }
</style>
