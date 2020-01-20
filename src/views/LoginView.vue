    <template>
    <main>
    <html>
    <head>
        <title>Customer Login</title>
    </head>
    <body>
        <div class="Login">
        <h1> LOGIN HERE </h1>
		<input type="radio" name="login" value="customer"> Customer
		<input type="radio" name="login" value="merchant"> Merchant <br><br>
        <input type="text" placeholder="username"> <br><br>
        <input type="Password" placeholder="Password"><br><br>
         <button>Submit</button>
        </div>
		<router-view/>
    </body>
    </html>
    </main>
    </template>

<script>
export default {
	
	}

</script>

<style>


</style>