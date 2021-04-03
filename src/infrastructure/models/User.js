const mongoose = require('../configs/databases');

const UserSchema = new mongoose.Schema({
    loginName: {
        type: String,
        require: true,
        unique: true
    },
    givenName: {
        type: String,
        require: true
    },
    eMailAddress: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    /*
    last12Passwords: {
        type: String[],

    },*/
    personalDocument: {
        type: String,
        require: true
    },
    lastMfaCodeUsed: {
        type: String,
        require: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastAuth: {
        type: Date,
        select: false,
        require: false,
    },
    lastResetPassword: {
        type: Date,
        select: false,
        require: false,
    },
    lastMfaRequested: {
        type: Date,
        select: false,
        require: false,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;