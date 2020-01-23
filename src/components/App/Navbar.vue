<template>
    <nav id="navbar" class="navbar">
        <section class="navbar_division left">
            <router-link :to="{name: 'Home'}" tag="span">
                <img class="navbar_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc_N_FCRJB6b0fkF51xtTKUr4QwmykKXLWzHEeO_gInMKmrV0R" alt="logo">
            </router-link>
        </section>
        <section class="navbar_division center">
            <input type = "text" value="search" placeholder="search">
            <router-link to="/search" class="navbar_route" tag="span">Search</router-link>
            <!-- <router-link to="/product" class="navbar_route" tag="span">Product</router-link>
        <router-link to="/cart" class="navbar_route" tag="span">Cart</router-link>
        <router-link to="/MerchantListing" class="navbar_route" tag="span">Merchant</router-link>  -->
        </section>
        <section class="navbar_division right">
            <router-link to="/login" class="navbar_route" tag="span">Login</router-link>
            <router-link to="/newuser" class="navbar_route" tag="span">New User</router-link>
            <router-link to="/cart" class="navbar_route" tag="span">Cart</router-link>
        </section>
        
        
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
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
</style>