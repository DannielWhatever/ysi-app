
angular
.module('starter.controllers')
.controller('LoginEmailController', function($state, $ionicPopup, $local, UsersServ){

  console.log('In LoginEmailController controller');

  this.form = {
    email: '',
    passwd: ''
  };


  this.login = (form) => {
    console.log('Valid form: '+form.$valid);
    if(form.$valid){
      UsersServ.loginEmail(this.form)
      .success(data=>{
        console.log(data);
        if(data){
          $local.set('user',data.user); //keep in $local
          $local.set('token',data.token);
          $state.go('tab.albums');
        }else{
          this.errorLogin();
        }
      })
      .error(()=>{
        this.errorLogin();
      });
    }
  };

  this.errorLogin = () => {
    $ionicPopup.alert({
      title: 'Login Incorrecto',
      template: 'Revisa tu email y contraseña :3'
    })
    .then(res=>{
      this.form = {email:'',passwd:''};
    });
  };


});
