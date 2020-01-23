<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/product">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/MerchantListing"></router-link> 
    </nav>
    <router-view/>
  </div>
</template>
 
<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
