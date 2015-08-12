
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
    if($scope.form.title===''){
      return ;
    }
    //continue
    goStep(2);
  };

  $scope.goStep3 = () => {
    //validate passwd, maybe?
    if($scope.form.passwd===''){
      return ;
    }
    //continue
    $scope.newAlbum = AlbumsServ.create($scope.form);
    goStep(3);
  };


  /*
   * Internal Functions
   */
  function goStep(step){
    $scope.stepSelected = step;
    console.log('Step selected: ',$scope.stepSelected);
  }

});
