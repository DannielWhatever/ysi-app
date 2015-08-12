
export default angular
.module('starter.services')
.factory('AlbumsServ', ($crypt, $local, $http, SERVER_REST) => {

  let _albums = [{
    id: 10, //internal id
    publicId: 'A', //public id => hex(id)
    title: 'Nerumi en la Playa',
    users: [
      {
        id: 1,
        nick: '@DannielWhatever',
        picture: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        permission: 'admin' //admin,collaborator,guest
      },
      {
        id: 3,
        nick: '@Rosa Espinoza',
        picture: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        permission: 'guest'
      }
    ],
    pictures: [
      {
        id: 1,
        title: 'foto ql ekiz',
        resource: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        comments: [
          {
            text: 'q kawaii :B',
            userId: 1
          }
        ]
      },
      {
        id: 2,
        title: 'foto ql zeta',
        resource: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        comments: []
      }
    ],
    cover: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }]; //add passwd and another shit just in the rest


  function _newAlbumMock(title, passwd){
    return {
      id: 11, //internal id
      publicId: 'B', //public id => hex(id)
      title: title,
      users: [ //just the user creator, taken from session
        {
          id: 1,
          nick: '@DannielWhatever',
          picture: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }
      ],
      pictures: [], //start empty
      cover: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' //take a demo cover from bd , just for albums without picture
    };
  }

/**
 * Public Interface
 */
  return {

     /**
      * return all the albums fr this user, take user from session.
      *
      * @returns object - all the albums from service
      */
    getAll: () => {
      //pass header with user to get
      return $http.get(SERVER_REST+'/albums/');
    },


     /**
      * Get a Album.
      *
      * @param albumId int - return the album with this Id
      * @returns object - the album
      */
    get: (albumId) => {
      //TODO:  validate user in service
      return $http({
        method: 'GET',
        url: SERVER_REST+'/albums/'+albumId,
        headers: {
          'User': undefined
        }
      });
    },

     /**
      * Create a new Album
      *
      * @param title string - the title fr the new album
      * @param passwd string - passwd fr share this album
      * @returns object - the new album
      */
    create: ({title, passwd}) => {

      let user = $local.get('user');
      let object = {
        title,
        passwd: $crypt.encode(passwd)
      };
      //TODO take this object and send to the api, then create,
      //fr create , first add permission 'admin' to users[0],
      //add created and modified dates,
      //next, add example picture and cover
      $http.post(SERVER_REST+'/albums/',object)
      .success(function(data){
        console.log(data);
        return data;
      })
      .error(function(){
        console.error('Error retrieving data');
        return null;
      });

      //TODO: take user credentials from session
      //let newAlbum = _newAlbumMock(title,passwd); //call service
      //_albums.push(newAlbum);
      //return newAlbum;
    },

    /**
     * Delete the album with this id
     *
     * @param albumId
     * @returns object - deleted album
     */
    delete: (albumId) => {
      //TODO:  validate user in service
      return $http({
        method: 'DELETE',
        url: SERVER_REST+'/albums/'+albumId,
        headers: {
          'User': undefined
        }
      });
    }


  };
});
