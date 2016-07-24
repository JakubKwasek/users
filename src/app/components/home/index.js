import HomeCtrl from './home.ctrl';

/***
   * @name Home
   * @desc Home Initialization class
   * @param {Object} app Express application
   */

export default class Home {

   constructor(...args) {
      let [app] = args;
      this.app = app;
      this.homeCtrl = new HomeCtrl();
      this.doRoutes();
   }

   /***
      * @name doRoutes
      * @desc Do all routes for the Home class
      */

   doRoutes() {
      this.app.get('/', (req, res) => {
         this.homeCtrl.getHome(req, res);
      });
   }

}
