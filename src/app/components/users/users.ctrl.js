import UsersModel from './users.model';

export default class UsersCtrl {

   constructor(...args) {
      this.usersModel = new UsersModel();
      console.log("Hello Users CTRL Constructor");
   }

   getUsers(req, res){
      res.send('GET request to the homepage');
   }

}
