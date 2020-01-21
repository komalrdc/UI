<template>
  <div class="nav">
      <p>{{this.userDetails}}</p>
      <img src="@/assets/bookstore.jpeg" alt="Bookstoreimage" height= "70px" width="90px" class="img" @click="$router.push('/')"/>
      <input type="text" class="search" placeholder="search" />
      <button class="search">Search</button>
      <button @click="$router.push('login')" class="login">login</button>
      <button @click="$router.push('signup')" class="newuser">newuser</button>
      <button class="cart">cart</button>
    </div>
    
</template>

<script>
// import newuser from '../views/NewUserView.vue'
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      username: 'anudeep',
      password: 'anudeep-passwrod'
    }
  },
  computed: {
    ...mapGetters(['userDetails'])
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

.img{
  float: left;
   
}
.nav{
  /* overflow: hidden; */
  background-color: #e9e9e9;
}
.button {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  top: 0;
  right:0;
}
.nav button:hover {
  background-color: #ddd;
  color: black;
}
.nav button.active {
  background-color: #2196F3;
  color: white;
}
 .cart{
  float: right;
  padding:10px;
  margin-right: 30px;
  margin-top: 25px;
}*/
.search{
  float: left;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  
}
 .login{
  margin-left: 450px;
  padding: 10px;
}
.newuser{
  margin-left: 50px;
  padding: 10px;
}  

</style>