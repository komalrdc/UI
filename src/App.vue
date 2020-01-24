<template>
  <main>
  <div id="app">
<<<<<<< HEAD
    <nav id="nav">
      <Navbar />
      <Footer />
      <!-- <router-link to="/product">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/MerchantListing">Merchant Profile</router-link>  -->
    </nav>
=======
    <Navbar />
    <Sidebar/>
>>>>>>> 80c2e40ccaa9a3b0f0a5cc6f77757ba2940f0514
    <router-view/>
  </div>
  </main>
</template>
 
<script>
<<<<<<< HEAD
import Navbar from '@/components/App/Navbar'
import Footer from '@/components/Footer'
//import Home from '@/views/Home'


export default {
  name: 'App',
  components: {
    Navbar,Footer
=======
import Navbar from './components/App/Navbar'
import Sidebar from './components/App/Sidebar'
export default {
  name: 'App',
  components: {
    Navbar, Sidebar
>>>>>>> 80c2e40ccaa9a3b0f0a5cc6f77757ba2940f0514
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
  padding:30px; 

}
#header {
  padding: 30px;
  text-decoration-color: red; 
  
}
#nav {
  padding:30px; 
  text-align: left; 

}

#nav1 {
  font-weight: bold;
  color: #2c3e50;
  align-items: left; 
  text-align: left; 
  padding:30px; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page_headers {
  display: block;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  background-color: white;
  margin: 0px;
  padding: 15px 0px;
  font-size: 1.5rem;
}

.test {
  border: 1px solid red;
}
</style>
