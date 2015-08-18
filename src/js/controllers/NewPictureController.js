
angular
.module('starter.controllers')
.controller('NewPictureController', function($state, $stateParams, $local, AlbumsServ){

  console.log('In new picture controller');


  this.imgTemp = $local.get('tempCamera');

  this.form = {
    title: ''
  };


  /*
   * Public Functions
   */
  this.save = () => {
    console.log(this.form.title);
    console.log(this.imgTemp);
    //TODO: save in model, create new fn in AlbumsServ
    $state.go('tab.viewAlbum',{albumId:$stateParams.albumId});
  };



});
