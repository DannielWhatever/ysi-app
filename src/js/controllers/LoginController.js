const _ = require('lodash');

angular
.module('starter.controllers')
.controller('LoginController', function($rootScope, $state, $local, UsersServ, FacebookServ, FB_CONNECTED){

  console.log('In login controller');

  //validate if already logged
  if(!_.isEmpty($local.get('user')) && !_.isEmpty($local.get('token'))){
    $state.go('tab.albums');
  }

  //FIXME: Login with Fb
  /*
  Read about Login with Fb and Fix It
  https://github.com/Terumi/AngularJS-Facebook-Login/blob/master/js/ctrl.js

  */

  this.fbUser = {};
  $rootScope.$on('fb_statusChange', (e, args) => {
      console.log('FB Status: '+args.status);
      if(args.status===FB_CONNECTED){//if its connected
        FacebookServ.getUserInfo(); //get user
        $rootScope.$watch('fbUser',(fbUser) => { //when it's ready
          this.fbUser = fbUser;
          //Login in the App with fb
          let user = UsersServ.loginFacebook(this.fbUser);
          console.log(user);
          if(user){
            $local.set('user',user);
            $state.go('tab.albums');
          }
        });
      }
  });



  this.loginWithMail = () => {
    $state.go('loginMail');
  };

  this.signUp = () => {
    $state.go('signUp');
  };


});
