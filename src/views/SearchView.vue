<template>
  <main clas="search">
    <h3 class="page_headers">
      Search List
    </h3>
      <router-view></router-view>
      <Search></Search>
    <ul class="product_list ">
      <li v-for="product in searchList" :key="product" class="product_list_item ">
        <figure class="">
          <img :src="product.url" height="150px" width="150px">
        </figure>
        <div class="added_items_quantity center">
          <p>{{product.title}}</p>
          <p> This is the description of the book. Please read it....</p>
          <p>{{product.price}}</p>
          <p>{{product.author}}</p>
        </div>
      </li>
    </ul>
      
  </main>
</template>

<script>
import Search from '@/components/Search/Search'
import { mapGetters, mapActions } from 'vuex'
export default {
  data: function() {
          return {
              value: 1
          }
    },
  components: {
    Search
    },
    computed: {
      ...mapGetters(['productList', 'search']),
    },
    // created () {
    //   window.console.log(this.searchList)
    //   this.$store.commit('SET_SEARCH_LIST', 'Fiction')
    // },
    methods: {
    ...mapActions(['getSearchList']),

        // searchListMethod: function() {
        //     this.$store.dispatch('getSearchList', {
        //         data: this.searchList,
        //         success: this.searchListSuccess
        //     })
        // },
        // searchListSuccess: function (result) {
        //   window.console.log(result);
        //   window.debugger;
        // }
    }
}
</script>

<style scoped lang="scss">
.buy-btn{
  display: block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 12px 30px;
  transition: all .5s;
  margin-left:auto;
  margin-right:auto
}
.buy-btn:hover {
  background-color: #64af3d;
}
.image {
  margin: 10px;
}
.product_list {
  width: 50vw;
  list-style-type: none;
  margin: 8px auto 0px;
  padding: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 4px grey;
  border: none;
}

.product_list_item {
  display: flex;
  flex-flow: row;
  justify-content: center;
  border-bottom: 3px solid grey;
  &:last-child {
    border: none
  }
}

.center {
  flex-grow: 1;
}
</style>