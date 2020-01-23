<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
 
<script>
import Navbar from './components/App/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
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
