<template>
  <div class="nav">
      <img src="@/assets/bookstore.jpeg" alt="Bookstoreimage" height="50px" width="120px" class="img" />
      <input type="text" class="inp" />
      <button class="but">Search</button>
      <button @click="$router.push('Login')">login</button>
      <button @click="$router.push('NewUser')">newuser</button>

      <button class="but2">cart</button>
    </div>
    
</template>

<script>
// import newuser from '../views/NewUserView.vue'

export default {
  data: function () {
    return {
      username: 'anudeep',
      password: 'anudeep-passwrod'
    }
  },
  // components: {
  //   newuser
  // },
  methods:{
    login: function () {
      window.console.log([this.username, this.password])
    },
    loadlogin () {
      this.$route.push({name: 'login'})
    },
    log: function() {
       window.console.log("Logged in")
    },
    New:function() {
      window.console.log("newuser logged in")
    }
  }
}
</script>

<style>


</style>