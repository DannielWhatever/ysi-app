/**
 * TODO: add new pictures to album
 * https://www.airpair.com/ionic-framework/posts/ionic-firebase-camera-app
 *
 */


angular
.module('starter.controllers')
.controller('ViewAlbumController', function($scope, $state, $stateParams, $local, $cordovaCamera, $cordovaImagePicker, AlbumsServ){

  console.log('In view album controller');

  $scope.$on('$ionicView.beforeEnter', ()=>{

    console.log('album id', $stateParams.albumId);

    AlbumsServ.get($stateParams.albumId)
    .success(data =>{
      console.log(data);
      this.album = data;
    })
    .error(()=>{
      console.error('Error retrieving data');
    });

  });


  this.takePicture = () => {
    const options = {
        quality : 75,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options)
    .then((imageData) => {
        this.imgURI = "data:image/jpeg;base64," + imageData;
        $local.set('tempCamera',this.imgURI);
        console.log(imageData);
        $state.go('tab.newPicture');
    }, (err) => {
        console.log(err);
    });


  };

  $scope.getPictures = () =>{
    const options = {
     maximumImagesCount: 10,
     width: 800,
     height: 800,
     quality: 80
    };

    $cordovaImagePicker.getPictures(options)
    .then((results) => {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
        }
    }, (err) => {
          console.log(err);
    });
  };

});
