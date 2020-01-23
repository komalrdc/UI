<template>
<div class="sidebar" >
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'fiction'}}">Fiction</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'non-fiction'}}">Non Fiction</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Competitive'}}">Competitive</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Children'}}">Children</router-link>
<router-link class="sidebar-item" :to="{name: 'Category', params: {id: 'Short-Stories'}}">Short-Stories</router-link>
</div>

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