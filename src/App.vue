<template>
  <div id="app">

    <!-- <div id="header">
      <h1> welcome merchant! </h1>
    </div>
    <div id="nav">
      <label style="align:left">Merchant Name:</label>
      <br>
      <label> Address:</label>
      <br> 
    </div>   -->
      <!-- <router-link to="/addbook">AddProduct</router-link> 
      <br> 
      <router-link to="/RemoveProduct">RemoveProduct</router-link> 
      <br> 
      <router-link to="/UpdateProduct">UpdateProduct</router-link>  -->
      <br> 
      <router-link to="/MerchantListing"></router-link> 
      <!-- <br> 
      <router-link to="/ViewRating">ViewRating</router-link>  -->
    <router-view/>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  data () {
    return {
    merchantProductList: ''
    }
  }
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
