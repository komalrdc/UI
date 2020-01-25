<template>
  <main class="categoryPage">
      <Sidebar/>
      <router-view/>
      <div class="booklist">
          <div v-for = "product in categoryProducts" :key="'product:' + product.id" class="books">
            <div>
              <!-- <figure @click="routeToProductDescription(product.id)"> -->
                <img :src = "product.url" height="150px" width="100px" class="image" @click="routeToProductDescription(product.productId)">
              <!-- </figure> -->
                <div class = "productdetails">
                <h3>{{product.product_name}}</h3>
                <h3>{{product.author}}</h3>
                <h3 img src= "@/assests/discount.png">{{product.price}}</h3>
                <h2>{{product.description}}</h2>
                </div>
            </div>
        </div>
      </div>
      </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import {mapGetters} from 'vuex'
export default {
    name: 'Category',
    components: {
           Sidebar
        },
    computed: {
        routerParams() {
            return this.$route.params
        },
        ...mapGetters(['categoryProducts', 'genreList']),
    },
      created() {
        window.console.log('this is the created hook were callnf',this.$route.params.id)
        this.$store.dispatch('getcategoryProducts', this.$route.params.id)
    },
     watch: {
       $route (to, from) {
          if(to.params.id !== from.params.id) {
            this.$store.dispatch('getcategoryProducts', this.$route.params.id)
          }
      }
    }, 
    methods: {
      routeToProductDescription: function(id){
        window.console.log(id); 
        this.$store.dispatch('productDetails',{
             data: id


        }) 
      } 
    }
  
}
    
</script>

<style scoped>
.booklist {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 10px;
  align-items: center;
}
.books {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  height: 325px;
  width: 200px;
}
.books:hover {
    border: 1px solid #777;
}
.image {
  display:block;
  margin: auto;
  height: 150px;
  width: 100px
}
.productdetails {
  align-self: center;

}
</style>