const User = require("../models/authsModel");

class UserRepository {
    create(user) {
        return User.create(user);
    }
    findByUsername(username) {
        return User.findOne({ username });
    }
    findById(id) {
        return User.findById(id).select("-password");
    }
    deleteTestUsers() {
        return User.deleteMany({ username: /^test/ });
    }
}

module.exports = UserRepository;