
angular
.module('starter.services')
.factory('UsersServ', function($crypt, $http, SERVER_REST){

  let _users = [{
    id: 10, //internal id
    facebookId:null,//123214124,
    email: 'dxnni@live.cl',
    passwd: '',
    nick: '',
    avatar: '' //trata de obtenerla de fb
  }]; //add passwd and another shit just in the rest


/**
 * Public Interface
 */
  return {

    /**
     * Sign Up a new User with email
     *
     * @param form object -> {email, passwd, nick}
     * @returns object - the new user profile
     */
    signUp: ({email,passwd,nick}) => {
      //TODO: Do this method. NOW
      nick= nick || (email.split('@'))[0];
      let newUser = {
        id: 11, //correlativo
        facebookId:null,
        email: email,
        passwd: btoa(passwd), //
        nick: nick,
        avatar: '' //default avatar
      };
      let header = 'Basic '+btoa(email+':'+passwd);
      console.log(header);
      return newUser;
    },


    /**
     * Sign in with email
     *
     * @param form object -> {email, passwd}
     * @returns object|null - if login is succefull return the user
     */
    loginEmail: ({email,passwd}) => {
      //Validate login
      let object = {
        email,
        passwd: $crypt.encode(passwd)
      };
      return $http.post(SERVER_REST+'/users/login',object);
    },


    /**
     * Sign in with fb credentials
     *
     * @param fbUser object - received from api fb
     * @returns object|null - if login is succefull return the user
     */
    loginFacebook: ({id,name,email,picture}) => {
      let user = _users[0];//find user in server
      user.facebookId = id;
      user.nick = name;
      user.email = email;
      user.avatar = picture.data.url;
      return user || null;
    }


  };
});
