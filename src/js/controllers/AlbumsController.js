
angular
.module('starter.controllers')
.controller('AlbumsController', function($scope, $ionicActionSheet, $local, AlbumsServ){

  console.log('In albums controller');


  /*
   * OnBeforeEnter
   */
  $scope.$on('$ionicView.beforeEnter', ()=>{

    this.user = $local.get('user');
    console.log('current user', this.user);

    this.getAllAlbums();
  });


  /*
   * Public Functions
   */
  this.albumActions = (album) => {
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
            .success(data=>{
              console.log(data);
              this.getAllAlbums();
            })
            .error(()=>{
              console.error('Error deleting data');
            });
            return true;
          }
      });
  };


  /*
   * Functions
   */
  this.getAllAlbums = ()=>{

    AlbumsServ.getAll()
    .success(data=>{
      console.log(data);
      this.myAlbums = data;
    })
    .error(()=>{
      console.error('Error retrieving data');
    });

  };

});
