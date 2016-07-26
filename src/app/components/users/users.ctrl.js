import UsersModel from './users.model';

export default class UsersCtrl {

   constructor(...args) {
      let [mongoose] = args;
      this.usersModel = new UsersModel(mongoose);
      // console.log(this.usersModel);
   }

   getUsers(req, res, next){
      res.render('users/layouts/users.layout.ejs');

      console.log(this.usersModel.getAllUsers());

   }
   getAllUsers(req, res, next){

   }
}
