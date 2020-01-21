    <template>
    <main>
	<Navbar />
    <body>
        <div class="Login">
			<h1> LOGIN HERE </h1>
			<div>
				<input v-model="loginType" type="radio" name="login" value="customer" checked id="type-customer">
				<label for="type-customer">Customer</label>
				
				<input v-model="loginType" type="radio" name="login" value="merchant" checked id="type-merchant">
				<label for="type-merchant">Merchant</label>
				
				<input v-model="username" class="username input" type="text" placeholder="username">
				<input v-model="password" class="password input" type="Password" placeholder="Password">

				<button @click="submitClicked" class="submit button">Submit</button>  <br> <br>
				<button><a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="fa fa-google"> LogIn With Gmail </a></button>  <br><br>
				<button><a href="https://en-gb.facebook.com/login/" class="fa fa-facebook">Login With Facebook</a></button>
			</div>
		</div>
		<router-view/>
    </body>
    </main>
    </template>

<script>
import Navbar from '@/components/App/Navbar'

export default {
	name: 'login',
	data: function () {
		return {
			username: '',
			password: '',
			loginType: 'customer'
		}
	},
	components: {
      Navbar
	},
	methods: {
		submitClicked () {
			let data = {
				email: this.username,
				password: this.password,
				loginType: this.loginType
			}
			this.$store.dispatch('loginUser', {
				data: data,
				success: function () {
					window.console.log('login successful...');
				},
				fail: function () {
					window.console.log('login failed ...');
				}
			})
		}
	}
}

</script>

  


<style scoped>
.Login{
	text-align: center;
	background-color: slateblue;
	margin-left: 30%;
	margin-right: 30%;
	padding-bottom: 30px;
	padding-top: 30px;
	border: 2px solid black;
	border-radius: 20px 20px;
}
.input {
	border: 1px solid black;
	border-radius: 8px;
	display: block;
	margin: 10px auto;
	padding: 5px;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-google {
  background: #dd4b39;
  color: white;
}



</style>