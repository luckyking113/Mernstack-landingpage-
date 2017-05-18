const mongoose = require('mongoose');

// Model Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    where: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const UserModel = module.exports = mongoose.model('User', userSchema);

// Get Models
module.exports.getModels = function(callback, limit) {
    UserModel.find(callback).limit(limit);
}

// Get Model
module.exports.getModelById = function(id, callback) {
    UserModel.findById(id, callback);
}

// Add Model
module.exports.addModel = function(usermodel, callback) {
    UserModel.create(usermodel, callback);
}

// Update Model
module.exports.updateModel = function(id, commodel, options, callback) {
    const query = { _id: id };
    const update = {
        companyname: commodel.companyname
    };
    UserModel.findOneAndUpdate(query, update, options, callback);
}

// Delete Model
module.exports.removeModel = function(id, callback) {
    const query = { _id: id };
    Commodel.remove(query, callback);
}

// module.exports.search = function(query, callback) {  
//     const q1 = {$or: [{modelname: eval(('/' + query + '/'))}, {event: eval(('/' + query + '/'))}]};
//     Evemodel.find(q1, callback);
// }