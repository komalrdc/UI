<template>
    <nav id="navbar" class="navbar">
        <section class="navbar_division left">
            <router-link :to="{name: 'Home'}" tag="span">
                <img class="navbar_logo" src="https://madewithvuejs.com/mandant/madewithvuejs/images/logo-vuetify.png" alt="logo">
            </router-link>
        </section>
        <section class="navbar_division center">
            <router-link to="/product" class="navbar_route" tag="span">Product</router-link>
        <router-link to="/cart" class="navbar_route" tag="span">Cart</router-link>
        <router-link to="/MerchantListing" class="navbar_route" tag="span">Merchant</router-link> 
        </section>
        <section class="navbar_division right">
            Hi User
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
        font-size: 1.6rem;
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