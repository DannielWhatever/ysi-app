
angular
.module('starter.controllers')
.controller('AccountController', function($state, $local){

  console.log('AccountController');

  this.settings = {
    enableFriends: true
  };

  this.logout = ()=>{
    $local.delete('token');
    $local.delete('user');
    $state.go('login');
  };

});
