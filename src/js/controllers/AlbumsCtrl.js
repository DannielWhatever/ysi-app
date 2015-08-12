
export default angular
.module('starter.controllers')
.controller('AlbumsCtrl', ($scope, $ionicActionSheet, $local, AlbumsServ) => {

  console.log('In albums controller');


  /*
   * OnBeforeEnter
   */
  $scope.$on('$ionicView.beforeEnter', function(){

    $scope.user = $local.get('user');
    console.log('current user', $scope.user);

    getAllAlbums();
  });


  /*
   * Public Functions
   */
  $scope.albumActions = (album) => {
      // Show the action sheet
      $ionicActionSheet.show({
          buttons: [
            { text: '<b>Comparte este Album</b>' }
          ],
          destructiveText: 'Eliminar',
          //titleText: 'Modify your album',
          cancelText: 'Cancelar',
          cancel: () => {}, //just hide
          buttonClicked: (idx) => {
            return true;
          },
          destructiveButtonClicked: () => {
            AlbumsServ.delete(album._id)
            .success(function(data){
              console.log(data);
              getAllAlbums();
            })
            .error(function(){
              console.error('Error deleting data');
            });
            return true;
          }
      });
  };


  /*
   * Functions
   */
  function getAllAlbums(){

    AlbumsServ.getAll()
    .success(function(data){
      console.log(data);
      $scope.myAlbums = data;
    })
    .error(function(){
      console.error('Error retrieving data');
    });

  }

});
