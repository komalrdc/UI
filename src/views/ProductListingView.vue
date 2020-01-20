<template>
<main>
    <h1> Product Listing Page</h1>
    <fieldset>
        <legend> Products </legend>       
        <div class="container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt0wRZ7qencbqGT2YvT3DiTYyGNC9-IsM9zWE0haTOPo6UFHps">
    </div>
    <p>Fictional Books</p>
    <div v-for = "product in products" :key="'productList:' + product.id" class="books">
            <div>
                <figure @click="routeToProductDescription(product.id)"> 
                <!-- <figure @click = "this.$router.push({name: 'productdescription', params: { title}}")> -->
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

export default {
    name:'productlisting',
    components: {
        ProductListing
    },
    data (){
        return {
            products:[
                {
                    id: 1,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbCguIryM13WHy8TeJn5P9bTwHDfKPVuuz0vNVKwb_KhoBo3MC",
                    title:"Kite Runner",
                    author:"Khaleed",
                    price: 300
                },
                {
                    id: 2,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgBuhT15PD5U-mVrhloPHX_Yp8QCbnINppJBEDPkaa0gF2lktm",
                    title:"The Shining",
                    author:"Stephen King",
                    price: 260
                },
                 {
                    id: 3,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgx4W9Ie1dygiEyrJOuQeUHn5xAc8u5DrXD2giPvUKH1RBEuNb",
                    title:"The Book Thief",
                    author:"Markus Zusak",
                    price: 480
                },
                {
                    id: 4,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoY0C60dff2TWbJFUw1Rwl72o9OOFtUN6asSNubXHdPny4zloi",
                    title:"Gone Girl",
                    author:"Gillian Flynn",
                    price: 270
                }
            ]
        } 
    },
    methods: {
        routeToProductDescription (id) {
            this.$router.push({
                name: 'description',
                params: {
                    id
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
            display: inline-block;
            margin: 5px;
        border: 1px solid #ccc;
        float: left;
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