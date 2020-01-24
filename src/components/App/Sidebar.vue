<template>
<main>
<div class="sidebar" >
<router-link class="sidebar-item" :to="{name: 'Product', params: {category: 'fiction'}}">Fiction</router-link>
<router-link class="sidebar-item" :to="{name: 'Product', params: {category: 'non-fiction'}}">Non Fiction</router-link>
<router-link class="sidebar-item" :to="{name: 'Product', params: {category: 'competitive'}}">Competitive</router-link>
<router-link class="sidebar-item" :to="{name: 'Product', params: {category: 'Children'}}">Children</router-link>
<router-link class="sidebar-item" :to="{name: 'Product', params: {category: 'Short-Stories'}}">Short-Stories</router-link>
</div>
</main>
</template>

<script>
export default {
}
</script>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    height: 573px;
    width: 15%;
    font-size: 25px;
    background-color: #e9e9e9;
    position: absolute;
    margin-top: 4.8%;
}
.sidebar-item {
    margin: 10px 10px;
    font-size: 18px; 
}
.sidebar a:hover {
  color: black;
}
.categories {
    text-align: left;
}
</style>