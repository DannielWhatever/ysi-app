var Albums = [{
  id: 10, //internal id
  publicId: 'A', //public id => hex(id)
  title: 'Nerumi en la Playa',
  users: [{//los users se guardan en el album pero solo estos 3 campos
    id: 1,
    nick: 'Nerumi',
    avatar: 'https://freddius.heroku.com/nerumi/profile.jpg'
  }],
  pictures: [{
    id: 1,
    title: 'foto ql ekiz',
    resource: 'https://freddius.heroku.com/514549811765211136/9SgAuHeY.png',
    comments: [
      {
        text: 'q kawaii :B',
        userId: 1,
        timestamp: 1231231231
      }
    ]
  },],
  created: 1231231231,//timestamp
  modified: 1231231231,
  cover: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' //una de pictures
}];

var Users = [{
  id: 10, //internal id
  email: 'dxnni@live.cl',//usa email y passwd para inicio de sesión sin fb
  passwd: 'asda322sad', //codificada
  facebookId:'asda1sa23214124',//si no es usuario de fb este id vaa en null
  nick: 'sad', //al registrarse trata de tomarlo de fb, usuario puede modificarlo dp
  avatar: '', //al registrarse trata de tomarlo de fb, usuario puede modificarlo dp
  albums: [1,23,24], //array con ids de albums
  created: 21312321312, //timestamp
  modified: 123123123,
  lastLogin: 12312321
}];
