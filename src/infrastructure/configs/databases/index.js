const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://app_user:app_user@cluster0.wqlu7.mongodb.net/app_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;



//