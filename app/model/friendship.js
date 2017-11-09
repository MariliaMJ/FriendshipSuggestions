const mongoose = require('mongoose');  

const FriendshipSchema = new mongoose.Schema({  
  friendship: [
    {
    name: String,
    gender: String,
    age: Number
    }
  ],
}, {collection: 'friendships'});

mongoose.model('friendships', FriendshipSchema);

module.exports = mongoose.model('friendship', FriendshipSchema);