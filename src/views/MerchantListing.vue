/* eslint-disable no-console */
<template>
<div>
    
    <div class="nav"> 

    <button class="signout" style="float:right" @click="home()">Sign Out</button>
    <button class="signout" @click="details" > My Profile </button>
    <h1 class="h1">Welcome Merchant!</h1> 
    
    </div> 
    <br> <br>  
    <router-link style="float:right"  to="/addbook" @click="toogleAddProductModalBox">Add a new Book</router-link> 
    
    <!--div id="nav"> 
    <router-link to="/addbook" @click="toogleAddProductModalBox">Add a new Book</router-link> 
    <button style="float:right" @click="home()">Sign Out</button>
    <h1>Welcome Merchant!</h1> 
    
    </div-->  
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
        <td> <button @click="display(product)">Remove Product</button></td>
        </tr>
    </table>
     <MerchantDetails v-if="flag1" :toggleFunction="details"></MerchantDetails>
    <UpdateProduct v-if="flag" :selectedProduct="edit"  :toggleFunction="toogleAddProductModalBox"></UpdateProduct>
    </div> 
</template>

<style scoped>
table {
    border: 1px solid grey
} 
</style>

<script>
import MerchantDetails from '@/components/merchant/MerchantDetails'
import { mapGetters, mapActions } from 'vuex'
import UpdateProduct from '@/components/merchant/UpdateProduct.vue'
//import func from '../../vue-temp/vue-editor-bridge'
//import AddProduct from '@/components/merchant/AddProduct.vue'
//import {function} from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'App',
  components: {
     UpdateProduct,
     MerchantDetails
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
      'merchantProductList',
      'getmerchantid'
    ])
  },
  created () {
    //   this.merchantProducts()
    // eslint-disable-next-line no-console
    this.getAllProductByMerchantId({
      data: this.$route.params.id
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
     },
     display: function(product){
        let data = {...product.merchantId,...product.productId}
        data.merchantId="1234"; 
        data.productId= product.productId; 
            event.preventDefault();
            event.stopPropagation();
            this.$store.dispatch('deleteProduct', {
                data: data,
                success: this.addNewProductSuccess
            })
        window.console.log(data.productId)
        alert('product deleted successfully'); 
         
     },
     details: function (){
         this.flag1=!this.flag1;
         //let data={...product.merchantId}
         window.console.log('getmerchantId',this.getmerchantid); 
         event.preventDefault();
            event.stopPropagation();
            window.debugger;
            this.$store.dispatch('getMerchantDetails', {
                data: this.getmerchantid,
                //success: this.addNewProductSuccess
            })
     }, 
     home: function() {  
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
  text-align: center;  
  font-size:18; 
   
}
.nav{
    background-color: #001f33;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0%;
  right: 0%;
  font-size: 20;
    
}
td{
   border: 1px solid #ddd;
   font-size:20; 
}
.h1{
  color:white;

}
.signout{
  float:right;
  padding: 10px;
  padding-right: 50px;
  border: none;
  margin-left: 10px;
  /* margin-right: 16px; */
  font-size: 17;
}
div1{
    z-index: -1; 
}
h2{
    
    text-align: left; 
}
</style>




