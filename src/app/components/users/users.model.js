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
}
