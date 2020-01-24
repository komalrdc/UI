<template>
  <main class="categoryPage">
      <Sidebar/>
      <!-- {{ routerParams }} -->
      <router-view/>
      <section class="section">
          {{routerParams}}
      </section>
      </main>
</template>

<script>
import Sidebar from '@/components/App/Sidebar'
export default {
    name: 'Category',
    components: {
           Sidebar
        },
    computed: {
        routerParams() {
            return this.$route.params.category
        }
    }
    // methods: {

    // }
}
</script>

<style>
</style>