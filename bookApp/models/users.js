var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    password_confirm : String,
    number : Number,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UserSchema);