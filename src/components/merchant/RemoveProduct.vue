<template>
    
<div> </div> 

</template>
<script>
export default {
    name: 'Addproduct',
    data: function () {
        return {
            product:{
                merchantId: '1234',
                productId: ''
            },
            successMessage:""
        } 
    },
    created () {
          this.product.productId = this.selectedProduct.productId
          
    },
    props: [
          'selectedProduct'
          ],

    methods: {
        saveProduct(event){
            window.console.log(data.productId);
            let data = {...this.product}
            data.merchantId="1234"
            event.preventDefault();
            event.stopPropagation();
            this.$store.dispatch('deleteProduct', {
                data: data,
                success: this.addNewProductSuccess
            })
        },
        addNewProductSuccess (res) {
            // eslint-disable-next-line no-console
            console.log(res)
            
           // this.toggleFunction();

        },
        toogleModalBox () {
            this.toggleFunction();

        }
    }
}
</script>