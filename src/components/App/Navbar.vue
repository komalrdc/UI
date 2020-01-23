<template>
  <div class="nav">
      <p>{{this.userDetails}}</p>
      <img src="@/assets/bookstore.jpeg" alt="Bookstoreimage" height= "40px" width="70px" class="img" @click="$router.push('/')"/>
      <input type="text" class="searchbox" placeholder="search" />
      <button class="search">Search</button>
      <button class="cart" @click="$router.push('cart')">cart</button>
      <button @click="$router.push('signup')" class="newuser">newuser</button>
      <button @click="$router.push('login')" class="login">login</button>
    </div>
    
</template>

<script>
// import newuser from '../views/NewUserView.vue'
// import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      username: 'anudeep',
      password: 'anudeep-passwrod',
      userDeatils: ''
    }
  },
  computed: {
    // ...mapGetters(['userDetails'])
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
  background-color: #001f33;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0%;
  right: 0%;

}
.btn {
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
.searchbox {
  float: left;
  padding: 10px;
  padding-right: 50px;
  border: none;
  margin-left: 300px;
  margin-right: 0;
  font-size: 17;
  width: 200px;
  align-items: stretch;
  
}
 .cart{
  float: right;
  padding:10px;
  /* margin-right: 30px; */
  background-color: #e9e9e9;
  margin-right: 30px;
} 
.search{
  float: left;
  padding: 10px;
  padding-right: 50px;
  border: none;
  margin-left: 10px;
  /* margin-right: 16px; */
  font-size: 17;
}
 .login{
  /* margin-left: 450px; */
    float: right;
  padding: 10px; 
  background-color: #e9e9e9
 }
 .newuser{
   /* margin-left: 200px; */
     float: right;
   padding: 10px; 
   background-color:#e9e9e9;
 }

</style>