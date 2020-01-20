<template>

    <form> <align:left>
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
       <label> ISBN </label>
       <input ID="isbn" type="number"/>
       <br><br>
       <button id="save" @click="SaveProduct()">Save</button> 
        </fieldset>
        </align:left>
    </form>

</template>
<script>
    export default{
        name: 'Addproduct',
        methods: {
            SaveProduct(){
                  alert('data updated successfully'); 
                
                

            }

        }


    }
</script>
<style>
    form{
        text-align: left; 
        background-color: orange; 

    }


</style>
