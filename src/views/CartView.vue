<template>
  <main clas="cart">
    <h3 class="page_headers">
      Shopping Bag
    </h3>
    <div class="total-price">Total Price: </div>
      <button @click="$router.push('checkout')" class="buy-btn">Proceed to Buy</button>
        <!-- <button @click="$router.push('checkout')">Proceed to Buy</button> -->
      <router-view></router-view>
      <Cart></Cart>
    <ul class="product_list ">
      <li v-for="product in productList" :key="product" class="product_list_item ">
        <figure class="">
          <img :src="product.url" height="150px" width="150px">
        </figure>
        <div class="added_items_quantity center">
          <p>{{product.title}}</p>
          <p> This is the description of the book. Please read it....</p>
          <p>{{product.price}}</p>
          <p>{{product.author}}</p>
        </div>
        <section class="right">
          <p>Quantity: {{ value }}</p>
          <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1"></vue-numeric-input>
          <div class="price">Combined Price</div>
        </section>
      </li>
    </ul>
      
  </main>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'
import { mapGetters } from 'vuex'
export default {
  data: function() {
          return {
              value: 1
          }
    },
  components: {
       VueNumericInput
    },
    computed: {
      ...mapGetters(['productList']),
      ...mapGetters(['selectedProduct'])
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

.center, .right {
  flex-grow: 1;
}
</style>