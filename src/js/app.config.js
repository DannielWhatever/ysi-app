
export default angular
.module('starter')
.config( ($stateProvider, $urlRouterProvider, $httpProvider, $facebookProvider, SERVER_REST, ASSETS_PATH, FB_APP_ID) => {

  $facebookProvider.setAppId(FB_APP_ID);


  $httpProvider.interceptors.push(($rootScope) => {
    return {
      request: req => {
        //$rootScope.$broadcast('loading:show');
        if(req.url && req.url.indexOf(SERVER_REST)===0){
          console.log('request intercepted');
          req.headers['auth-x'] = '1';
        }
        return req;
      },
      response: res => {
        //$rootScope.$broadcast('loading:hide');
        //console.log(res);
        return res;
      }
    };
  });

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //Login
  .state('login', {
    url: '/login',
    templateUrl: ASSETS_PATH + '/login/login.html',
    controller: 'LoginCtrl'
  })

  .state('loginMail', {
    url: '/login/email',
    templateUrl: ASSETS_PATH + '/login/login-email.html',
    controller: 'LoginEmailCtrl'
  })

  .state('signUp', {
    url: '/signUp',
    templateUrl: ASSETS_PATH + '/login/sign-up.html',
    controller: 'SignUpCtrl'
  })

  // Tabs
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: ASSETS_PATH + '/tabs.html'
  })

  // Each tab has its own nav history stack:

  //Albums
  .state('tab.albums', {
    url: '/albums',
    views: {
      'tab-albums': {
        templateUrl: ASSETS_PATH + '/albums/tab-albums.html',
        controller: 'AlbumsCtrl'
      }
    }
  })

  .state('tab.newAlbum', {
    url: '/albums/new',
    views: {
      'tab-albums': {
        templateUrl: ASSETS_PATH + '/albums/new-album.html',
        controller: 'NewAlbumCtrl'
      }
    }
  })

  .state('tab.viewAlbum', {
    url: '/albums/:albumId',
    views: {
      'tab-albums': {
        templateUrl: ASSETS_PATH + '/albums/view-album.html',
        controller: 'ViewAlbumCtrl'
      }
    }
  })

  .state('tab.newPicture', {
    url: '/albums/:albumId/new',
    views: {
      'tab-albums': {
        templateUrl: ASSETS_PATH + '/albums/new-picture.html',
        controller: 'NewPictureCtrl'
      }
    }
  })

  //Settings
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: ASSETS_PATH + '/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
