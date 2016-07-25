import UsersModel from './users.model';

export default class UsersCtrl {

   constructor(...args) {
      this.usersModel = new UsersModel();
   }

   getUsers(req, res){
      res.render('users/layouts/users.layout.ejs');
   }
}
