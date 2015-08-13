
export default angular
.module('starter.controllers')
.controller('NewAlbumCtrl', ($scope, AlbumsServ) => {

  console.log('In new album controller');

  $scope.stepSelected = 1;

  $scope.form = {
    title: '',
    passwd: ''
  };


  /*
   * Public Functions
   */
  $scope.goStep2 = () => {
    //validate name, maybe?
    if($scope.form.title===''){ return ; }
    //continue
    goStep(2);
  };

  $scope.goStep3 = () => {
    //validate passwd, maybe?
    if($scope.form.passwd===''){ return ; }

    //create and continue
    AlbumsServ.create($scope.form)
    .success(function(data){
      console.log(data);
      $scope.newAlbum = data;
      goStep(3);
    })
    .error(function(){
      console.error('Error retrieving data');
      return null;
    });
  };


  /*
   * Internal Functions
   */
  function goStep(step){
    $scope.stepSelected = step;
    console.log('Step selected: ',$scope.stepSelected);
  }

});
