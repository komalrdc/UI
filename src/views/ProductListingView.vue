<template>
<main>
    <h1> Product Listing Page</h1>
    <fieldset>
        <legend> Products </legend>       
        <div class="container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt0wRZ7qencbqGT2YvT3DiTYyGNC9-IsM9zWE0haTOPo6UFHps">
    </div>
    <p>Fictional Books</p>
    <!-- <p>{{this.get()}}</p> -->
    <div v-for = "(product, index) in productList" :key="index" class="books">
            <div>
                <figure @click="routeToProductDescription(product.id)"> 
                    <img :src = "product.url" height="150px" width="100px">
                </figure>
                <h2>{{product.title}}</h2>
                <h2>{{product.author}}</h2>
                <h2>{{product.price}}</h2>
            </div>
        </div>
        </fieldset>
        <router-view></router-view>
      <ProductListing></ProductListing>
  </main>
</template>

<script>
import ProductListing from '@/components/product/ProductListing.vue'
import {mapGetters} from 'vuex'

export default {
    name:'productlisting',
    components: {
        ProductListing
    },
    data (){
        return {
        } 
    },
    computed: {
        ...mapGetters(['productList'])
    },
    methods: {
        // get () {
        //     return this.productList
        // },
        routeToProductDescription (id) {
            this.$router.push({
                name: 'description',
                params: {
                    id
                },
            }) 
        },
        click(){
            let data = {
                id: this.product.id,
                url: this.product.url,
                title: this.product.title,
                author: this.product.author,
                price: this.product.price
            }
            this.$store.dispatch('productDetails', {
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
    }
</script>

<style scoped>
.container{
	height: 100%;
	width: 100%;
}

.books{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        display: inline-block;
        margin: 5px;
        border: 1px solid #ccc;
        grid-template-columns: 40px 50px auto 50px 40px;
        grid-template-rows: 25% 100px auto;
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: row1-start;
        grid-row-end: 3;
}
.books:hover {
    border: 1px solid #777;
}
h2{
        font-size: 20px;
}
</style>