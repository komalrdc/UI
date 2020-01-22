<template>
  <main>
    <div class="shopping-cart">
  <!-- Title -->
  <div class="title">
    Shopping Bag
  </div>
 
  <!-- Product #1 -->
  <div class="item">
    <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img src="" alt="" />
    </div>
 
    <div class="description">
      <span>Book name</span><br>
      <span>Author</span><br>
      <span>White</span>
    </div>
      <p>Quantity: {{ value }}</p>
      <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1"></vue-numeric-input>
    <div class="total-price">Total Price</div>
  </div>
</div>
        <button @click="$router.push('checkout')" class="buy-btn">Proceed to Buy</button>
      <router-view></router-view>
      <Cart></Cart>
  </main>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'
export default {
  data: function() {
          return {
              value: 1
          }
    },
  components: {
       VueNumericInput
    }
}
</script>

<style scoped>
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
</style>