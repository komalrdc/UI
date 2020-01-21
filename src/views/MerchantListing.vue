<template>
<div>
    <div1> 
    <div id="nav"> 
    <router-link to="/addbook" @click="toogleAddProductModalBox">Add a new Book</router-link> 
    <button style="float:right">Sign Out</button>
    <h1>Welcome Merchant!</h1> 
    </div>  
    <h2> Your products on sale: </h2> 
    <table id="table"> 
        <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Genre</th>
        <th>Publisher Name</th>
        <th>year Of Publishing</th>
        <th>binding type</th> 
        <th>ISBN</th>
        <th>Quantity</th>
        <th>product logo</th>
        <th>Product Rating</th> 
        </tr> 
        <tr>
        <tr v-for="product in marchantProducts" :key="product">
        <td>{{product.productName}}</td>
        <td>{{product.price}}</td>
        <td>{{product.genre}}</td>
        <td>{{product.publisherName}}</td>
        <td>{{product.yearOfPublishing}}</td>
        <td>{{product.bindingtype}}</td>
        <td>{{product.ISBN}}</td>
        <td>{{product.quantity}}</td>  
        <td><img src="https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg" height="100" wodth="100"></td> 
        <td>{{product.rating}}</td> 
        <td><button  @click="toogleAddProductModalBox">edit details</button>
        <span id="mypopup"></span>
        </td> 
        
        </tr>
    </table>
    </div1> 
    <AddProduct :toggleFunction="toogleAddProductModalBox" v-if="flag"></AddProduct>
</div>
</template>

<style scoped>
table {
    border: 1px solid grey
}
</style>

<script>
import AddProduct from '@/components/merchant/AddProduct.vue'
import { mapGetters } from 'vuex'
//import {function} from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'App',
  components: {
     AddProduct
  },
  data() {
    //  flag:false,
      return {

          merchantDetails : "Apple",
          marchantProducts: [
      {
        productName: "harry potter",
        price: "500",
        genre: "children",
        publisherName: "mc graw hill",
        yearOfPublishing: "2019",
        bindingtype: "soft binding",
        ISBN: "2243",
        quantity: "5",
        rating: "5"
       // productlogo: ""
      },
      {
        productName: "harry potter",
        price: "500",
        genre: "children",
        publisherName: "mc graw hill",
        yearOfPublishing: "2019",
        bindingtype: "soft binding",
        ISBN: "2243",
        quantity: "5",
        rating: "5"
       // productlogo: ""
      },
      {
        productName: "harry potter",
        price: "500",
        genre: "children",
        publisherName: "mc graw hill",
        yearOfPublishing: "2019",
        bindingtype: "soft binding",
        ISBN: "2243",
        quantity: "5",
        rating: "5"
      },
      {
        productName: "harry potter",
        price: "500",
        genre: "children",
        publisherName: "mc graw hill",
        yearOfPublishing: "2019",
        bindingtype: "soft binding",
        ISBN: "2243",
        quantity: "5",
        rating: "5"
      }
    ],
    flag:false
      }
  },
  created () {
    //   this.merchantProducts()
  },
   ...mapGetters(['merchantProductList']),
  methods : {
      merchantProducts: function() {
          var data = {
              merchantName : this.merchantDetails
          }
          window.console.log("merchantname", data)
          this.$store.dispatch('getMerchantProducts', {
              data 
          })
      },
     toogleAddProductModalBox: function(){
        this.flag = !this.flag; 
        //window.console.log(flag); 
         
     }
  }
}
</script>
<style scoped>
#table{
  width:100%; 
  padding:30px; 
  background-color:skyblue; 
  row-gap:10px; 


}
#nav{
    background-color:orange; 
    width:95%; 
    
}
div1{
    z-index: -1; 
}
h2{
    
    text-align: left; 
}
</style>>




