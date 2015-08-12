
export default angular
.module('starter.controllers')
.controller('NewPictureCtrl', ($scope, $state, $stateParams, $local, AlbumsServ) => {

  console.log('In new picture controller');


  $scope.imgTemp = $local.get('tempCamera');

  $scope.form = {
    title: ''
  };


  /*
   * Public Functions
   */
  $scope.save = () => {
    console.log($scope.form.title);
    console.log($scope.imgTemp);
    //TODO: save in model, create new fn in AlbumsServ
    $state.go('tab.viewAlbum',{albumId:$stateParams.albumId});
  };



});
