<template>
  <main>
  <div id="app">
    <nav id="nav">
      <Navbar />
      <Footer />
      <!-- <router-link to="/product">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/MerchantListing">Merchant Profile</router-link>  -->
    </nav>
    <router-view/>
  </div>
  </main>
</template>
 
<script>
import Navbar from '@/components/App/Navbar'
import Footer from '@/components/Footer'
//import Home from '@/views/Home'


export default {
  name: 'App',
  components: {
    Navbar,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#aside {
  float:left;
  padding:30px; 

}
#header {
  padding: 30px;
  text-decoration-color: red; 
  
}
#nav {
  padding:30px; 
  float:left; 
  text-align: left; 

}

#nav1 {
  font-weight: bold;
  color: #2c3e50;
  float: left; 
  align-items: left; 
  text-align: left; 
  padding:30px; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
