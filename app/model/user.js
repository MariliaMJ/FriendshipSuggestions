const mongoose = require('mongoose');  

const UserSchema = new mongoose.Schema({  
  name: String,
  gender: String,
  age: Number,
}, {collection: 'users'});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');