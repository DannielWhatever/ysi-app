
angular
.module('starter.services')
.factory('$crypt', function($window){

  return {

    /**
     * encrypt some input
     *
     * @param passwd
     * @returns string - the encripted passwd
     */
    encode: (passwd) => {
      return btoa(passwd); //im kidding u, this 'll change
    },

  };

});
