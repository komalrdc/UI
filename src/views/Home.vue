<template>
<main>
  <!-- <main> -->
    <Navbar />
    <Sidebar/>
    <Footer />
</main>
  <!-- </main> -->
</template>

<script>
import Navbar from '@/components/App/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
  name : '',
  components: {
    Navbar,Sidebar,Footer
  }
  

}
</script>

<style>

</style>
