var User = mongoose.model('User', new Schema({
    id          : ObjectId,
    firstName   : String,
    lastName    : String,
    email       : {type: String, unique: true},
    password    : String
}));
