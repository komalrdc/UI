<template>
<section class="modal">
  <div @click="toogleModalBox" class="modal_background"></div>
    <div class="modal_content">
        <span @click="toogleModalBox" class="modal_close">X</span>
    <table>
       <tr> 
       <label>Name:</label> 
       <label>Address:</label>
       <label>Contact Number:</label>
       <label>Email:</label> 
       <label>Pincode:</label> 
       </tr> 
       <tr v-for="(product, index) in merchantDetails" :key="index">
       <td>{{product.merchantName}}</td> 
       </tr>
  </table> 
  </div>
</section>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
     props: [
          'toggleFunction'
          ],
     computed:{
          ...mapGetters([
      'merchantDetails',
    ])

     },
      methods:{
          toogleModalBox () {
            this.toggleFunction();
            window.console.log(this.merchantDetails)

        }
      }
}
</script>
<style scoped>
    form{
        text-align: left; 
        /* background-color: orange;  */
    }

.modal {
    position: relative;
}
.modal_background {
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
}

.modal_content {
    box-sizing: border-box;
    border-radius: 20px;
    background-color: lightblue;
    font-size:20;
    position: fixed;
    z-index: 100;
    height: 30vh;
    width: 30vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    overflow: hidden;
}
label{
    font-style:oblique;
}
.modal_close {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: grey;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
}
.modal_close:hover {
    transform: scale(1.5);
}
ol{
    text-align:left; 
    font-size: 40;
}
li{
    font-size:30;
    
}
</style>

