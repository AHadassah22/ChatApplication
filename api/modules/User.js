const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {type : String, unique : true},
    password : StorageManager,
},   {timestamps : true});


const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;