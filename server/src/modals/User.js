const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, message: 'Username is required'},
    password: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);