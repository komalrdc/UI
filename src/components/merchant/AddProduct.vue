<template>
<section class="modal">
    <div @click="toogleModalBox" class="modal_background"></div>
    <div class="modal_content">
        <span @click="toogleModalBox" class="modal_close">X</span>
        <form>
            <fieldset>
                <legend>Add New Product</legend>
            <label>Product Name</label>
            <input id="ProductName" type="text"/>
            <br><br>
            <label>Price</label>
            <input id="Price" type="double"/>
            <br><br>
            <label> Product Logo </label>
            <input id="logo" type="text"/> 
            <br><br>
            <label> Genre </label>
            <input id="genre" type="text"/>
            <br><br>
            <label> Publisher Name </label>
            <input id="Publisher" type="text"/>
            <br><br>
            <label> Year Of Publishing </label>
            <input id="YearoOfPublishing" type="number"/>
            <br><br>
            <label> Binding Type </label>
            <input id="BindType" type="text"/>
            <br><br>
            <label>Quantity</label>
            <input type="number" id="quantity"/>
            <br><br>
            <label>Description</label>
            <textarea></textarea>
            <br><br> 
            <label> ISBN </label>
            <input ID="isbn" type="number"/>
            <br><br>
            <button id="save" @click="SaveProduct()">Save</button> 
            </fieldset>
        </form>    
    </div>
</section>
</template>

<script>
    export default{
        name: 'Addproduct',
        props: ['toggleFunction'],
        methods: {
            SaveProduct(){
                alert('data updated successfully'); 
            },
            toogleModalBox () {
                this.toggleFunction();
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
    background-color: dodgerblue;
    position: fixed;
    z-index: 100;
    height: 80vh;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    overflow: hidden;
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
</style>
