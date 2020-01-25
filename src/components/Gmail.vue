<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>
 <script>
export default {
  data () {
    return {
    googleSignInParams: {
       client_id: '32270784463-qmbt9p9r7iajvbt3ovgvupcrdkochv8m.apps.googleusercontent.com'
    //    client_id: '1036747509060-7coa294fjugf0amod9uh4a4fsnbkhn9g.apps.googleusercontent.com'
      }
     }
  },
  methods:{
    onSignInSuccess (googleUser)
    {
      //const data={acessToken:googleUser.uc.access_token}
      window.console.log(googleUser)
      //this.$store.dispatch('sendToken',{data})
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      window.console.log('OH NOES', error)
    }
}
//}
}
 </script>
 <style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
   padding: 4px 8px;
   border-radius: 3px;
   background-color: #3C82F7;
   color: #fff;
  box-shadow: 0 3px 0 #0F69FF;
 }
 </style>