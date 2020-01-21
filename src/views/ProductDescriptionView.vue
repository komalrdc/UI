<template>
  <main class="container">
        <!-- <h1>Product Description</h1> -->
        <!-- <h1>{{$route.params.id}}</h1> -->
        <div class="left-column">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfwDCwWtknObpzcJjSKAvpws-7N7-vvUUXmna5-cloG49AKDzE">
        </div>
        <div class = "right-column">
            <div class="description">
                <span>Books Category</span>
                <h1>Book name</h1>
                <p>Author, bind, publisher</p>
            </div>
            <div class = "merchant">
                <p> Sold by merchant link </p>
            </div>  
            <div class="input-group">
                <input type="button" data-field="number" @click="decrease">
                <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field">
                <input type="button" data-field="number" @click="increase">
            </div>
            <div class="product-price">
                <span>Price</span>
                <p><router-link to="/cart/" tag="button" class="cart-btn">Add to Cart</router-link>
                <router-link to="/checkout/" tag="button" class="cart-btn">Buy Now</router-link></p>
            </div>
                     
        </div>
        <!-- <router-link to="/cart/" tag="button">Add to Cart</router-link> -->
        <!-- <button @click="routeToCart(product.id)">Add to Cart</button> -->
        <router-view></router-view>
      </main>
</template>

<script>
export default {
    name: 'products',
    data: function(){
          return {
              number: 1
          }
    },
    computed: {
        productId() {
            return this.$route.params.id
        }
    },
    watch: {
        productId: function () {
            this.fetchProductDetails(this.productId)
        }
    },
    methods: {
        increase: function(){
            this.number = this.number +1
        },
        decrease: function(){
            this.number = this.number-1
        },
        fetchProductDetails(id) {
            // Dispatch action to fetch deatils related to one category
            this.$store.dispatch('fetchProductDetails', {
                data: {
                    id,
                    success: this.onSuccess,
                    fail: this.onFail
                }
            })
        },
        onSuccess () {
            // TODO
            // Do somethings...
        },
        onFail () {
            // TODO
            // Show proper erros
        }
    },
    created: function() {
        this.fetchProductDetails(this.productId)
    }
}
</script>

<style scoped>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
 
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}
.left-column {
    height: 100px;
    /* width:100px; */
  width: 65%; 
  position: relative;
}
.right-column {
  width: 35%;
  margin-top: 60px;
}
.description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

.input-group {
  clear: both;
  margin: 15px 0;
  position: relative;
}

/* .input-group input[type='button'] {
  background-color: #eeeeee;
  min-width: 38px;
  width: auto;
  transition: all 300ms ease;
} */

/* .input-group .button-minus,
.input-group .button-plus {
  font-weight: bold;
  height: 38px;
  padding: 0;
  width: 38px;
  position: relative;
} */

.input-group .quantity-field {
  position: relative;
  height: 38px;
  left: -6px;
  text-align: center;
  width: 62px;
  display: inline-block;
  font-size: 13px;
  margin: 0 0 5px;
  resize: vertical;
}

/* .button-plus {
  left: -13px;
} */

.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
.cart-btn{
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}


</style>