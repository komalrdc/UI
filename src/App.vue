<template>
  <main class ="app">
    <Navbar />
    <Sidebar />
    <Footer />
    <router-view/>
  </main>
</template>

<script>
import Navbar from '@/components/App/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,Sidebar,Footer
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
