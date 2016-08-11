import UsersModel from './users.model';

export default class UsersCtrl {

   constructor(...args){
      let [mongoose] = args;
      this.usersModel = new UsersModel(mongoose);
   }

   getAllUsers(req, res, next){
      this.usersModel.User.find({}, { _id: 0 }, (err, el) => {
         if(el){
            res.render('users/layouts/users_layout.ejs', { users: el } );
         }
         next();
      });
   }

   addUser(req, res, next){
      let id = req.body.id;
      res.json({ user: 'testAdd' });
      next();
   }

   getUser(req, res, next){
      let id = req.body.id;
      res.json({ user: 'testGet' });
      next();
   }

   putUser(req, res, next){
      let id = req.body.id;
      res.json({ user: 'testPut' });
      next();
   }

   deleteUser(req, res, next){
      let id = req.body.id;
      res.json({ user: 'testDelete' });
      next();
   }

}
