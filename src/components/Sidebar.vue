<template>
<div class="sidebar" >
<a href="">Fiction</a>
<a href="">Non-Fiction</a>
<a href="">Competitive</a>
<a href="">Children</a>
<a href="">Short Stories</a>
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
    height: 100%;
    width: 15%;
    font-size: 25px;
    background-color: #e9e9e9;
}
.sidebar a:hover {
  color: black;

}
.categories {
    text-align: left;
}
</style>