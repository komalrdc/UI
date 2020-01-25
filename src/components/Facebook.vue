<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Facebook
  </fb-signin-button>

</template>
<script>
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      window.FB.api('/me', dude => {
        window.console.log(`Good to see you, ${dude.name}.`)
      })
      window.console.log(response)
    },
    onSignInError (error) {
      window.console.log('OH NOES', error)
    }
  }
}
</script>
<style scoped>
.fb-signin-button {
  display: inline-block;
    border-radius: 10px;
  color: #FFFFFF;
text-decoration: none;
background: #0EA1B6;
padding: 12px;
transition: all 0.4s ease 0s;
margin-right: 50px;
margin-left: -25px;
align-self: center;
}
.fb-signin-button:hover{
  border-radius: 10px;
  color: #FFFFFF;
  background: #3B5998;
  border-color: #3B5998;
  transition: all 0.4s ease 0s;
  cursor: pointer;
}
</style>