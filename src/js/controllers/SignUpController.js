
angular
.module('starter.controllers')
.controller('SignUpController', function($state, $local, UsersServ){

  console.log('In SignUpController controller');

  this.form = {
    email: '',
    passwd: '',
    nick: ''
    //verifyPasswd: ''
  };


  this.signUp = (form) => {
    console.log('Valid form: '+form.$valid);
    if(form.$valid){
      let user = UsersServ.signUp(this.form);
      $local.set('user',user); //keep in $local
      $state.go('tab.albums');
    }
  };


});
