<template>
<<<<<<< HEAD
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

=======
    <nav id="navbar" class="navbar">
        <section class="navbar_division left">
            <router-link :to="{name: 'Home'}" tag="span">
                <img class="navbar_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc_N_FCRJB6b0fkF51xtTKUr4QwmykKXLWzHEeO_gInMKmrV0R" alt="logo">
            </router-link>
        </section>
        <section class="navbar_division center">
            <input type = "text" placeholder="search">
            <button @click ="searchListMethod" class="navbar_route">Search</button>
            <!-- <router-link to="/search" class="navbar_route" tag="span">Search</router-link> -->
        </section>
        <section class="navbar_division right">
            <router-link to="/login" class="navbar_route" tag="span">Login</router-link>
            <router-link to="/newuser" class="navbar_route" tag="span">New User</router-link>
            <router-link to="/cart" class="navbar_route" tag="span">Cart</router-link>
        </section>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default { 
    name: 'Navbar',

    computed: {
      ...mapGetters(['search'])
    },
    created() {
        window.console.log(this.searchList)
      this.$store.commit('SET_SEARCH_LIST', 'Fiction')
    },
    methods: {
        ...mapActions(['getSearchList']),
        searchListMethod: function() {
            this.$store.dispatch('getSearchList', {
                data: this.searchList,
                success: this.searchListSuccess
            })
        },
        searchListSuccess: function (result) {
          window.console.log(result);
          window.debugger;
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar {
    background-color: whitesmoke;
    height: 80px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: stretch;
    &_division {
        display: flex;
        align-items: center;
    }
    &_route {
        border-radius: 8px;
        background-color: dodgerblue;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        margin: 0px 5px;
        padding: 10px 30px;
    }
    &_logo {
        width: 80px;
        height: 80px;
    }
}

.left {
    cursor: pointer;
}
.right {
    font-size: 1.5rem;
}
>>>>>>> 80c2e40ccaa9a3b0f0a5cc6f77757ba2940f0514
</style>