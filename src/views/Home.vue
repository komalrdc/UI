<template>
<main>
    <Sidebar/>
    <div class = "container">
    <img  class="img1" src="https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg" height="100px" width="100px">
    <img src="https://www.accenture.com/t20190729T070354Z__w__/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Local/us-en/52/Accenture-Books-Image.jpgla=en" height="100px" width="100px">
    <img src="https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg" height="100px" width="100px">
    <img src="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg" height="100px" width="100px">
    <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80" height="100px" width="100px">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-8nWjOvpJCEXjTbvubalkOKhzaIuvy_O0r25caLi3Xu_FC8W6w&s" height="100px" width="100px">
    <img src="https://miro.medium.com/max/1024/1*YLlZ96J3p8GFkIh1USVMzg.jpeg" height="100px" width="100px;">
    </div>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name : '',
  components: {
    Sidebar
  }
}
</script>

<style>
.container{
  /* display: flex;
  justify-content: space-between;
  flex-direction: co; */
  left: 160px;
  top: 100px;
  width: 800px;
  margin-left: 30px;
  position: absolute;
  }
.container img {
  margin: 10px 20px;
}
</style>
