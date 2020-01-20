 <template>
 <main>
<html>
<head>
    <title>New User Login</title>
    </head>
<body>
    <div>
		<input type="radio"  name="newuser" value="customer"> Customer<br>
		<input type="radio"  name= "newuser" value="merchant"> Merchant <br><br>
	<input type="text" placeholder="Name"><br><br>
	<input type="text" placeholder="Address"> <br><br>
	<input type="email" placeholder="Email"> <br><br>
	<input type="number" placeholder="Phone Number"><br><br>
	<input type="number" placeholder="Pincode"> <br><br>
	<input type="Password" placeholder="Password"><br><br>
	<input type="Password" placeholder="Conform Password"><br><br>
	<button>Submit</button>
    <router-view/>
    </div>
</body>
</html>
 </main> 
 </template>
 <script>
 export default {
	name: 'newuser'
 }
 </script>
 
 <style>
 
 </style>
