var joi = require('joi');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    userName: { 
        type: String, 
        required: true, 
        minLength: 5,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024
    },
    createdDate: Date
}, {
        collection: 'users'
    });

function validateUser(user) {
    const schema = {
        userName: joi.string().min(5).max(50).required(),
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required(),
        createdDate: joi.date()
    };
    return joi.validate(user, schema);
}

const User = mongoose.model('Users', UsersSchema);

exports.User = User;
exports.validate = validateUser;