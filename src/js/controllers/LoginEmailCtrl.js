
export default angular
.module('starter.controllers')
.controller('LoginEmailCtrl', ($scope, $state, $ionicPopup, $local, UsersServ) => {

  console.log('In LoginEmailCtrl controller');

  $scope.form = {
    email: '',
    passwd: ''
  };


  $scope.login = (form) => {
    console.log('Valid form: '+form.$valid);
    if(form.$valid){
      let user = UsersServ.loginEmail($scope.form);
      if(user){
        $local.set('user',user); //keep in $local
        $state.go('tab.albums');
      }else{
          //login invalido
          $ionicPopup.alert({
            title: 'Login Incorrecto',
            template: 'Revisa tu email y contraseña :3'
          })
          .then(function(res) {
            $scope.form = {email:'',passwd:''};
          });
      }
    }
  };


});
