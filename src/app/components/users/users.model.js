// var User = mongoose.model('User', new Schema({
//     id          : ObjectId,
//     firstName   : String,
//     lastName    : String,
//     email       : {type: String, unique: true},
//     password    : String
// }));

export default class UsersModel {
   constructor(...args) {
      let [mongoose] = args;
      this.mongoose = mongoose;
      this.doModel();
   }

   doModel(){
      let Schema     = this.mongoose.Schema;
      let ObjectId   = Schema.ObjectId;
      this.User = this.mongoose.model('User', new Schema({
         id          : ObjectId,
         firstName   : String,
         lastName    : String
      }));
   }

   getAllUsers(){
      let users = {};
      this.User.find({}, function(err, el){
         if(el){
            users = el;
            console.log('1');
         }
      });
      console.log('2');
      return users;
   }
}
