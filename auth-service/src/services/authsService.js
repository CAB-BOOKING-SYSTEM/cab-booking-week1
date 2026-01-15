const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/authsrepository");
const config = require("../config/config");

class AuthService {
    constructor() {
        this.userRepo = new UserRepository();
    }
    async register(username, password) {
        const exists = await this.userRepo.findByUsername(username);
        if (exists) throw new Error("Username already taken");

        const hash = await bcrypt.hash(password, 10);
        return this.userRepo.create({ username, password: hash });
    }
    async login(username, password) {
        const user = await this.userRepo.findByUsername(username);
        if (!user) throw new Error("Invalid username or password");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid username or password");

        return jwt.sign({ id: user._id }, config.jwtSecret);
    }
    getProfile(userId) {
        return this.userRepo.findById(userId);
    }
    deleteTestUsers() {
        return this.userRepo.deleteTestUsers();
    }
}
module.exports = AuthService;