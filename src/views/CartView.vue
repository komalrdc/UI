<template>
  <main>
    <div class="shopping-cart">
  <!-- Title -->
  <div class="title">
    Shopping Bag
  </div>
    <div class="image">
      <img src="" alt="" />
    </div>
    <ul class="product_list">
      <li v-for="product in productList" :key="product" class="product_list_item">
        <figure>
          <img :src="product.url" height="150px" width="100px">
        </figure>
        <div class="added_items_quantity">
          <p>{{product.title}}</p>
          <p>{{product.price}}</p>
          <p>{{product.author}}</p>
          <p>Quantity: {{ value }}</p>
          <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1"></vue-numeric-input>
          <div class="price">Combined Price</div>
        </div>
      </li>
    </ul>
  </div>
      <div class="total-price">Total Price: </div>
      <button @click="$router.push('checkout')" class="buy-btn">Proceed to Buy</button>
        <!-- <button @click="$router.push('checkout')">Proceed to Buy</button> -->
      <router-view></router-view>
      <Cart></Cart>
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

<style scoped>
/* .added_items{
  flex-basis: 65%;
  border: 2px solid red;
  margin-right: 700px;
  margin-top: 50px;
}

.added_items_quantity {
  border: 2px solid blue;
  display: inline-block;
  margin-bottom: 50px;
  margin-left: 700px;
  float: right;

}*/
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
  list-style-type: none;
  margin: 10px auto;
}

.product_list_item {
  display: flex;
  flex-flow: row;
}
</style>