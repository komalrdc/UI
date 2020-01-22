<template>
  <div id="app">
    <nav id="nav">
      <h1 style="background-color: red">Welcome!</h1>
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
