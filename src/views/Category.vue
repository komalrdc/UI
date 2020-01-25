<template>
  <main class="categoryPage">
      <Sidebar/>
      <!-- {{ routerParams }} -->
      <router-view/>
      <section class="section">
          {{routerParams}}
          <div v-for = "product in categoryProducts" :key="'product:' + product.id" class="books">
            <div>
                <img :src = "product.url" height="150px" width="100px">
                <h2>{{product.title}}</h2>
                <h2>{{product.author}}</h2>
                <h2>{{product.price}}</h2>
            </div>
        </div>
      </section>
      </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'Category',
    components: {
           Sidebar
        },
    computed: {
        routerParams() {
            return this.$route.params
        },
        ...mapGetters('categoryProducts'),
        ...mapActions('getProductListing')
    }
}
</script>

<style>
</style>