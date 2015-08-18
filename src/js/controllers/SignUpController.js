
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
      UsersServ.signUp(this.form)
      .success(data=>{
        console.log(data);
        if(data){
          $local.set('user',data.user);
          $local.set('token',data.token);
          $state.go('tab.albums');
        }
      })
      .error(()=>{
        console.error('Error in signup');
      });
    }
  };


});
