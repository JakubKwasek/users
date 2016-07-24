import HomeModel from './home.model';

export default class HomeCtrl {

   constructor(...args) {
      this.homeModel = new HomeModel();
      console.log("Hello Home CTRL Constructor");
   }

   getHome(req, res){
      // res.send('GET request to the homepage');§
      res.render('home/views/home.view.ejs');
      console.log(req.app.get('views'));
   }

}
