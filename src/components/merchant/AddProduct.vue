/* eslint-disable no-console */
<template>
<section class="modal">
    <div @click="toogleModalBox" class="modal_background"></div>
    <div class="modal_content">
        <span @click="toogleModalBox" class="modal_close">X</span>
        <form id="myform" method="post">
            <fieldset>
                <legend>Add New Product</legend>
            <label>Product Name</label>
            <input id="ProductName" type="text" v-model="product.productName" required />
            <br><br>
            <label>Author</label>
            <input type="text" id="author"  v-model="product.author" required /> 
            <br><br> 
            <label>Price</label>
            <input id="Price" type="double" v-model="product.price" required />
            <br><br>
            <label> Product Logo </label>
            <input id="logo" type="text" v-model="product.url" required/> 
            <button id="upload">Upload</button> 
            <br><br>
            <label> Genre </label>
            <input id="genre" type="text" v-model="product.genre" required/>
            <br><br>
            <label> Publisher Name </label>
            <input id="Publisher" type="text" v-model="product.publisher" required/>
            <br><br>
            <label> Year Of Publishing </label>
            <input id="YearoOfPublishing" type="number" v-modal="product.year" required/>
            <br><br>
            <label> Binding Type </label>
            <input id="BindType" type="text" v-model="product.binding" required/>
            <br><br>
            <label>Quantity</label>
            <input type="number" id="quantity" v-model="product.quantity" required/>
            <br><br>
            <label>Description</label>
            <textarea v-model="product.description" required></textarea>
            <br><br> 
            <label> ISBN </label>
            <input ID="isbn" type="number" v-model="product.isbn" required/>
            <br><br>
            
            <button id="save" @click="saveProduct">Save</button> 
            </fieldset>
        </form>    
    </div>
</section>
</template>

<script> 
export default{
    name: 'Addproduct',
    data: function () {
        return {
            product: {
                merchantId: '1234',
                productName: 'My Product',
                author: 'Prakriti Tiwari',
                price: '20',
                url: '',
                genre: 'fiction',
                description: 'cvc',
                attributes: {
                publisher: "",
                year: '2000',
                binding: 'soft',
            
                } ,
                quantity: '2',
                isbn: '22345',
                

            }
        }
    },
    props: ['toggleFunction'],

    methods: {
        saveProduct(event){
            let data = {...this.product}
            event.preventDefault();
            event.stopPropagation();
            this.$store.dispatch('addNewProduct', {
                data: data,
                success: this.onSuccessFun
            })
        },
        onSuccessFun (res) {
            // eslint-disable-next-line no-console
            console.log(res)
            this.$router.push('/MerchantListing')
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
