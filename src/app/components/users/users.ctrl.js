import UsersModel from './users.model';

export default class UsersCtrl {

   constructor(...args) {
      let [mongoose] = args;
      this.usersModel = new UsersModel(mongoose);
      // console.log(this.usersModel);
   }

   getUsers(req, res, next){
      this.usersModel.User.find({}, (err, el) => {
         if(el){res.render('users/layouts/users.layout.ejs', { users: el } );
         }
         next();
      });
   }

   getAllUsers(req, res, next){

   }

   addUser(req, res, next){

   }

   deleteUser(req, res, next){

   }

   updateUser(req, res, next){

   }
}
