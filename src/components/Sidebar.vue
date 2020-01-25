<template>
<div class="sidebar" >
<router-link @click ="categoryProducts" class="sidebar-item" :to="{name: 'Category', params: {id: 'fiction'}}">Fiction</router-link>
<router-link @click ="categoryProducts" class="sidebar-item" :to="{name: 'Category', params: {id: 'non-fiction'}}">Non Fiction</router-link>
<router-link @click ="categoryProducts" class="sidebar-item" :to="{name: 'Category', params: {id: 'Competitive'}}">Competitive</router-link>
<router-link @click ="categoryProducts" class="sidebar-item" :to="{name: 'Category', params: {id: 'Children'}}">Children</router-link>
<router-link @click ="categoryProducts" class="sidebar-item" :to="{name: 'Category', params: {id: 'Short-Stories'}}">Short-Stories</router-link>
</div>
</template>

<script>
export default {
 methods: {
     categoryProducts: function() {
         this.$store.dispatch('', {
                data: this.routerParams,
                success: this.catergoryProductsSuccess
            })
        },
        categoryProductsSuccess: function (result) {
          window.console.log(result);
          this.$router.push('/category/:id')
        }
    }
    
}
</script>

<style>
.sidebar {
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center; 
    padding-left: 30px;
    padding-right: 30px;
    height: 43px;
    width: 100%;
    font-size: 25px;
    justify-content: space-between;
    /* background-color: #e9e9e9; */
    position: absolute;
}
.sidebar-item {
    align-self: center;
    padding: 10px;
    font-size: 18px; 
    text-decoration: none;
}
.sidebar a:hover {
  color: black;
  text-decoration: none;
  background-color: #0ea1b6;
  color: white;

}
.categories {
    text-align: left;
}
</style>