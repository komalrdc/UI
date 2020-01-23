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
import Sidebar from '@/components/Sidebar'
export default {
    name: 'Category',
    components: {
           Sidebar
        },
    computed: {
        routerParams() {
            return this.$route.params
        }
    }
}
</script>

<style>
</style>