<template>
  <div id="app">

    <div id="nav">
      <h1 style="background-color: red">Welcome!</h1>
      <router-link style="align:right" to="/AddProduct">AddProduct</router-link> 
      
      <!-- <router-link to="/about">About</router-link> | -->
    </div>
    <div id="footer">  </div> 
    
    <router-view/>
  </div>
</template>
<script>

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
