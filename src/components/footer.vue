<template>
<main>
     <div class="ab">
    <div class="aa">
        <h1>About us</h1>
    </div>
    <div class="bb">
        <h1>Contact Us</h1>
    </div>
    <div class="cc">
        <h1>More</h1>
    </div>
    </div>
</main>


</template>

<script>
export default {
}
</script>

<style>
.ab{
    background-color: #001f33;
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 12%;
}
.aa{
    width: 33%;
    background-color: #e9e9e9;
}
.bb{
    width: 33%;
    background-color: #e9e9e9;
}
.cc{
    width: 34%;
    background-color: #e9e9e9;
}
</style>