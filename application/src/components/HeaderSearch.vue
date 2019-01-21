<template>
  <div class="search-container" :class="{active:isSearcActive}">
      <button class="search-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8248 18.98L14.9645 14.1197C16.2683 12.6208 17.0576 10.6652 17.0576 8.52772C17.0576 3.82262 13.2306 0 8.52994 0C3.82484 0 0.00222778 3.82705 0.00222778 8.52772C0.00222778 13.2284 3.82928 17.0554 8.52994 17.0554C10.6674 17.0554 12.6231 16.2661 14.122 14.9623L18.9823 19.8226C19.0976 19.9379 19.2528 20 19.4035 20C19.5543 20 19.7095 19.9424 19.8248 19.8226C20.0554 19.592 20.0554 19.2106 19.8248 18.98ZM1.19513 8.52772C1.19513 4.48337 4.48559 1.19734 8.5255 1.19734C12.5698 1.19734 15.8559 4.4878 15.8559 8.52772C15.8559 12.5676 12.5698 15.8625 8.5255 15.8625C4.48559 15.8625 1.19513 12.5721 1.19513 8.52772Z" fill="#647588"/>
        </svg>
      </button>
      <input
        type="text"
        class="search-field"
        placeholder="Search..."
        v-model="searchValue"
        @focus="isSearcActive=true"
        @blur="isSearcActive=false">
      <div class="search-results" v-if="showSearchResults">
        <div class="results-number">
          Number of results: <b>{{ searchResults.length }}</b>
        </div>
        <div class="result-item head">
          <div class="name">
            Name
          </div>
          <div class="category">
            Category
          </div>
          <div class="number">
            Tracks
          </div>
        </div>
        <a
          class="result-item"
          v-for="result in searchResults"
          :key="result.id"
          :href="result.href">
          <div class="name">{{ result.name }}</div>
          <div class="category">{{ result.category }}</div>
          <div class="number">{{ result.trackNumber }}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data () {
    return {
      searchValue: '',
      isSearcActive: false,
      searchResults: [
        {
          id: 1,
          name: 'African basketball',
          trackNumber: 10,
          category: 'Sport',
          href: '#'
        }, {
          id: 2,
          name: 'BMW - is the best car',
          trackNumber: 18,
          category: 'Cars',
          href: '#'
        }, {
          id: 3,
          name: 'Vue.js as framework',
          trackNumber: 145,
          category: 'IT',
          href: '#'
        }
      ]
    }
  },
  computed: {
    showSearchResults () {
      return this.searchValue.length > 2
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .search-container{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .search-btn{
    width: 45px;
    padding-left: 3px;
    padding-top: 5px;
    border: 0;
    border-right: 1px solid #E5E5E5;
    height: 35px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  .search-field{
    width: 0;
    padding: 0;
    margin: 0;
    height: 30px;
    border: 0;
    outline: 0;
    background-color: #ffffff;
    color: #647588;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    transition: width 0.3s;
  }
  .search-results{
    display: none;
    position: absolute;
    width: 100%;
    top: 100%;
    background-color: #E5E5E5;
    padding: 10px;
    font-size: 18px;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    color: #647588;
    b {
      color: #000;
    }
    .results-number {
      padding-bottom: 10px;
    }
    .result-item{
      font-size: 20px;
      padding: 5px 12px;
      padding-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover{
        background-color: #F4F4FA;
      }
      .name{
        flex-basis: 300px;
        text-align-last: left;
      }
      .category{
        flex-grow: 1;
      }
      .number{
        flex-basis: 50px;
        text-align: right;
      }
      &.head{
        font-size: 14px;
        color: #999;
        &:hover{
          background-color: transparent;
        }
      }
    }
  }
  .search-container:hover, .search-container.active{
    .search-field{
      width: 160px;
      padding: 0 10px;
      margin: 0 10px;
    }
    .search-results{
      display: block;
    }
  }
  .categories-page{
    .search-results{
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
  }
</style>
