<template>
    <nav id="navbar" class="navbar">
        <section class="navbar_division left">
            <router-link :to="{name: 'Home'}" tag="span">
                <img class="navbar_logo" src="@/assets/bookslogo.png" alt="logo">
            </router-link>
        </section>
        <section class="navbar_division center">
            <input type = "text" v-model="searchTerm" placeholder="   search..." class="navbar_searchBar">
            <button @click ="searchListMethod" class="navbar_route">Search <img src="@/assets/search.png" height="16px" width="16px"></button>
            <!-- <router-link to="/search" class="navbar_route" tag="span">Search</router-link> -->
        </section>
        <section class="navbar_division right">
            <router-link to="/login" class="navbar_route" tag="button"> Login <img src="@/assets/login.png" height="16px" width="16px"></router-link>
            <router-link to="/newuser" class="navbar_newuser" tag="button">Sign Up<img src="@/assets/new.png" height="16px" width="16px"></router-link>
            <router-link to="/cart" class="navbar_route" tag="button">Cart <img src="@/assets/shopping.png" height="16px" width="16px"></router-link>
        </section>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default { 
    name: 'Navbar',
    data: function () {
    return {
      searchTerm: '',
      searchDisplay: '',
    }
    },
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
                data: this.searchTerm,
                success: this.searchListSuccess
            })
        },
        searchListSuccess: function (result) {
          window.console.log(result);
          this.$router.push('/search')
        }
    },
}
</script>

<style lang="scss" scoped>

.navbar {
    //sbackground-color: whitesmoke
    background-color: white !important;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    position:fixed;
    width: 100px;
    
    //justify-content: space-between;
    align-items: stretch;
    &_division {
        display: flex;
        align-items: center;
    }
    &_route {
        align-items: center;
        align-content: center;
        align-self: center;
        width: 100px;
        border-radius: 8px;
        background-color: #0ea1b6;
        font-size: 1.6rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        margin-left:10px;
        padding: auto;
        height: 30px;
    }
    &_logo {
        margin-left: 30px;
        margin-right: 30px;
        width: 40px;
        height: 40px;
    }
    &_searchBar {
        height: 30px;
        width: 680px;
    }
    &_newuser {
        width: 100px;
        border-radius: 8px;
        background-color: #0ea1b6;
        font-size: 1.6rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        margin-left:20px;
        padding: auto;
        height: 30px;
    }

}

.left {
    cursor: pointer;
}
.right {
    font-size: 1.5rem;
    margin-left: 30px;
}
</style>