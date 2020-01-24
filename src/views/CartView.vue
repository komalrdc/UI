<template>
<<<<<<< HEAD
  <main clas="cart">
    <h3 class="page_headers">
      Shopping Bag
    </h3>
    <div class="total-price">Total Price: </div>
      <button @click="$router.push('checkout')" class="buy-btn">Proceed to Buy</button>
        <!-- <button @click="$router.push('checkout')">Proceed to Buy</button> -->
=======
  <main>
    <div class="shopping-cart">
  <!-- Title -->
  <div class="title">
    Shopping Bag
  </div>
    <div class="image">
      <img src="" alt="" />
    </div>
    <ul>
         <li v-for="product in productList" :key="product">
                <img :src = "product.url" height="150px" width="100px">
                {{product.title}} - {{product.price}} - {{product.author}}
            </li>
        </ul>
    <div class="description">
      <span>Book name</span><br>
      <span>Author</span><br>
      <span>White</span>
    </div>
      <p>Quantity: {{ value }}</p>
      <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1"></vue-numeric-input>
    <div class="total-price">Total Price</div>
  </div>
      <button @click="$router.push('checkout')" class="buy-btn">Proceed to Buy</button>
       <h1>Your Shopping Cart</h1>
        <button @click="$router.push('checkout')">Proceed to Buy</button>
>>>>>>> 54bf1011533701dec2a443a9cd03f5a380180e14
      <router-view></router-view>
      <Cart></Cart>
    <ul class="product_list ">
      <li v-for="product in productList" :key="product.title" class="product_list_item ">
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
          <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1" @click="quantity"></vue-numeric-input>
          <div class="price">Combined Price</div>
        </section>
      </li>
    </ul>
      
  </main>
</template>
<script>
import VueNumericInput from 'vue-numeric-input'
import { mapGetters } from 'vuex'
<<<<<<< HEAD
import Cart from '../components/cart/Cart'
=======
>>>>>>> 54bf1011533701dec2a443a9cd03f5a380180e14
export default {
  data: function() {
          return {
              value: 1
          }
    },
  components: {
<<<<<<< HEAD
    Cart,
       VueNumericInput
    },
    computed: {
      ...mapGetters(['productList']),
      ...mapGetters(['selectedProduct'])
    },
    methods: {
      quantity: function() {
        
      }
    }
}
</script>

<style scoped lang="scss">
=======
       VueNumericInput
    },
    computed: {
      ...mapGetters(['productList'])
    }
}
</script>
<style scoped>
>>>>>>> 54bf1011533701dec2a443a9cd03f5a380180e14
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
<<<<<<< HEAD
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
=======
  background-color: #64AF3D;
>>>>>>> 54bf1011533701dec2a443a9cd03f5a380180e14
}
</style>