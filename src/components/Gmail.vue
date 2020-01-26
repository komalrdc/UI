<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Google
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
    border-radius: 10px;
  color: #ffffff;
text-decoration: none;
background: #0ea1b6;
padding-top: 12px;
padding-bottom: 12px;
padding-left: 20px;
padding-right: 20px;
cursor: pointer;
transition: all 0.4s ease 0s;

 }
 .g-signin-button:hover{
  border-radius: 10px;
  color: #ffffff;
  background: #de5246;
  border-color: #de5246;
  transition: all 0.4s ease 0s;
  cursor: pointer;


 }
 </style>