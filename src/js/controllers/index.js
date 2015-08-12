
const appControllers = angular.module('starter.controllers', []);

//Auth
require('./LoginCtrl.js');
require('./LoginEmailCtrl.js');
require('./SignUpCtrl.js');

//Albums
require('./AlbumsCtrl.js');
require('./NewAlbumCtrl.js');
require('./NewPictureCtrl.js');
require('./ViewAlbumCtrl.js');

//Settings
require('./AccountCtrl.js');


export default appControllers;
