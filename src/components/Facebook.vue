<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
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
<style>
.fb-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267B2;
  color: #fff;
  
}
</style>
