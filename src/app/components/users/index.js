import UsersCtrl from './users.ctrl';

/***
   * @name Users
   * @desc Users Initialization class
   * @param {Object} app Express application
   */

export default class Users {

   constructor(...args) {
      let [app, mongoose] = args;
      this.app = app;
      this.mongoose = mongoose;
      this.usersCtrl = new UsersCtrl(this.mongoose);
      this.doRoutes();
   }

   /***
      * @name doRoutes
      * @desc Do all routes for the Users class
      */

   doRoutes() {
      this.app.get('/users', (req, res, next) => {
         this.usersCtrl.getUsers(req, res, next);
      });
   }

}
