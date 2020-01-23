/* eslint-disable no-console */
<template>
<div>
    
    <div id="nav"> 
    <router-link to="/addbook" @click="toogleAddProductModalBox">Add a new Book</router-link> 
    <button style="float:right" @click="home()">Sign Out</button>
    <h1>Welcome Merchant!</h1> 
    
    </div>  
    <h2> Your products on sale: </h2> 
    <table id="table"> 
        <tr>
        <th>Product Name</th>
        <th>Author</th> 
        <th>Price</th>
        <th>Genre</th>
        <th>Publisher Name</th>
        <th>year Of Publishing</th>
        <th>binding type</th> 
        <th>ISBN</th>
        <th>Quantity</th>
        <th>product logo</th>
        <th>Product Rating</th> 
        <th>Number Of Pages</th> 
        </tr> 
        <tr>
        <tr v-for="(product, index) in merchantProductList" :key="index">
        <td>{{product.productName}}</td>
        <td>{{product.author}}</td> 
        <td>{{product.price}}</td>
        <td>{{product.genre}}</td>
        <td>{{product.attributes.publisher}}</td>
        <td>{{product.attributes.year}}</td>
        <td>{{product.attributes.binding}}</td>
        <td>{{product.isbn}}</td>
        <td>{{product.quantity}}</td>  
        <td><img :src='product.url' width="100" height="200"></td> 
        <td>{{product.rating}}</td> 
        <td>{{product.attributes.noofpages}}</td> 
        <td><button  @click="toogleAddProductModalBox(product)">edit details</button>
        <span id="mypopup"></span> 
        </td> 
        <td> <button @click="display">Remove Product</button></td>
        </tr>
    </table>
    
    <UpdateProduct v-if="flag" :selectedProduct="edit"  :toggleFunction="toogleAddProductModalBox"></UpdateProduct>
    <RemoveProduct v-if="flag1" :selectedProduct="edit1" ></RemoveProduct> 
    </div> 
</template>

<style scoped>
table {
    border: 1px solid grey
}
</style>

<script>
//import AddProduct from '@/components/merchant/AddProduct.vue'
import { mapGetters, mapActions } from 'vuex'
import UpdateProduct from '@/components/merchant/UpdateProduct.vue'
import RemoveProduct from '@/components/merchant/RemoveProduct.vue'
//import {function} from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'App',
  components: {
     //AddProduct,
     UpdateProduct,
     RemoveProduct
  },
  data() {
    //  flag:false,
      return {
          
          flag:false,
          flag1:false,
          edit: "",
          edit1: ""
      }
  },
  computed: {
    ...mapGetters([
      'merchantProductList'
    ])
  },
  created () {
    //   this.merchantProducts()
    // eslint-disable-next-line no-console
    this.getAllProductByMerchantId({
      data: 1234
    })
  },
  methods : {
    ...mapActions([
    'getAllProductByMerchantId'
    ]),
      merchantProducts: function() {
          var data = {
              merchantName : this.merchantDetails
          }
          window.console.log("merchantname", data)
          this.$store.dispatch('getMerchantProducts', {
              data 
          })
      },
     toogleAddProductModalBox: function(product = {}){
        this.flag  = !this.flag;
        this.edit=product; 
        //window.console.log(flag); 
         
     },
     display: function(product={}){
        this.flag1 = !this.flag1;
        this.edit1=product;
        window.console.log(product.productId)
        alert('product deleted successfully'); 
         
     },
     home: function() {
       //xyz  
       
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
</style>




