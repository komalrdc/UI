<template>
  <main class="productDescriptionView">
        <!-- <h1>Product Description</h1> -->
        <!-- <h1>{{$route.params.id}}</h1> -->
        <div class="left-column">
            <img class="product_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfwDCwWtknObpzcJjSKAvpws-7N7-vvUUXmna5-cloG49AKDzE">
        </div>
        <div class = "right-column">
            <div class="description">
                <span>Books Category</span>
                <h1>Book name</h1>
                <p>Author, bind, publisher</p>
            </div>
            <div class = "merchant">
                <p> Sold by <a href=" " >Merchant link </a></p>
            </div>  
            <div> 
                <p>Quantity: {{ value }}</p>
                <vue-numeric-input  v-model="value" :min="1" :max="100" :step="1"></vue-numeric-input>
            </div>
            <div class="product-price">
                <span>Price</span>
                <!-- <button @click = "addtocart" class="cart-btn">Add to Cart</button> -->
                <p><router-link to="/cart/" tag="button" class="cart-btn" >Add to Cart</router-link></p>
            </div>         
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'
import {mapGetters} from 'vuex'
export default {
    name: 'products',
    data: function() {
          return {
              value: 1
          }
    },
    components: {
       VueNumericInput
    },
    computed: {
        productId() {
            return this.$route.params.id
        },
         ...mapGetters(['productList'])
    },
    watch: {
        productId: function () {
            this.fetchProductDetails(this.productId)
        }
    },
    methods: {
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
    },
     click(){
            let data = {
                id: this.product.id,
                url: this.product.url,
                title: this.product.title,
                author: this.product.author,
                price: this.product.price
            }
            this.$store.dispatch('cartDetails', {
                data: data,
                success: function () {
                    window.console.log('Product added successfully...');
                },
                fail: function () {
                    window.console.log('Product added failed...');
                }
            })
        }

}
</script>

<style scoped>

.productDescriptionView {
  max-width: 1200px;
  min-height: 60vh;
  margin: 0px auto;
  padding: 15px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: stretch;
}
.left-column {
  transition: transform .2s;
}
.left-column:hover {
    transform: scale(1.2);
}
.right-column {
  flex-basis: 65%;
}
.description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.product_image {
    width: 320px;
    height: 500px;
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

.product-price {
  display: flex;
  align-items: center;
  margin-left: 300px;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
.cart-btn{
  display: block;
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