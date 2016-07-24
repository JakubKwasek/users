import UsersCtrl from './users.ctrl';

/***
   * @name Users
   * @desc Users Initialization class
   * @param {Object} app Express application
   */

export default class Users {

   constructor(...args) {
      let [app] = args;
      this.app = app;
      this.usersCtrl = new UsersCtrl();
      this.doRoutes();
   }

   /***
      * @name doRoutes
      * @desc Do all routes for the Users class
      */

   doRoutes() {
      this.app.get('/users', (req, res) => {
         this.usersCtrl.getUsers(req, res);
      });
   }

}
