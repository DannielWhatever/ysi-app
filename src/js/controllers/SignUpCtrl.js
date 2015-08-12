
export default angular
.module('starter.controllers')
.controller('SignUpCtrl', ($scope, $state, $local, UsersServ) => {

  console.log('In SignUpCtrl controller');

  $scope.form = {
    email: '',
    passwd: '',
    nick: ''
    //verifyPasswd: ''
  };


  $scope.signUp = (form) => {
    console.log('Valid form: '+form.$valid);
    if(form.$valid){
      let user = UsersServ.signUp($scope.form);
      $local.set('user',user); //keep in $local
      $state.go('tab.albums');
    }
  };


});
