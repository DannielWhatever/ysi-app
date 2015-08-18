const SHA256 = require('crypto-js/sha256');


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
      return SHA256(passwd).toString();
    },
  };

});
