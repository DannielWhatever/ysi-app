
angular
.module('starter.controllers')
.controller('NewAlbumController', function(AlbumsServ) {

  console.log('In new album controller');

  this.stepSelected = 1;

  this.form = {
    title: '',
    passwd: ''
  };


  /*
   * Public Functions
   */
  this.goStep2 = () => {
    //validate name, maybe?
    if(this.form.title===''){ return ; }
    //continue
    this.goStep(2);
  };

  this.goStep3 = () => {
    //validate passwd, maybe?
    if(this.form.passwd===''){ return ; }

    //create and continue
    AlbumsServ.create(this.form)
    .success(data=>{
      console.log(data);
      this.newAlbum = data;
      this.goStep(3);
    })
    .error(()=>{
      console.error('Error retrieving data');
      return null;
    });
  };


  this.goStep = (step)=>{
    this.stepSelected = step;
    console.log('Step selected: ',this.stepSelected);
  };

});
