import HomeModel from './home.model';

export default class HomeCtrl {

   constructor(...args) {
      this.homeModel = new HomeModel();
   }

   getHome(req, res){
      res.render('home/layouts/home.layout.ejs');
   }
}
