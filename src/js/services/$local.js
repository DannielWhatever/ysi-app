
angular
.module('starter.services')
.factory('$local', function($window){

  return {

//try reflection for work with strings

    set: (key, value) => {
      $window.localStorage[key] = JSON.stringify(value);
    },

    get: (key) => {
      return JSON.parse($window.localStorage[key] || '{}');
    },

    delete: (key) => {
      $window.localStorage.removeItem(key);
    }


  };

});
