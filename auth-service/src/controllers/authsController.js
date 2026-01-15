const AuthService = require("../services/authsService");

class AuthController {
    constructor() {
        this.authService = new AuthService();
    }
    register = async(req, res) => {
        try {
            const { username, password } = req.body;
            const user = await this.authService.register(username, password);
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };
    login = async(req, res) => {
        try {
            const { username, password } = req.body;
            const token = await this.authService.login(username, password);
            res.json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };
    profile = async(req, res) => {
        const user = await this.authService.getProfile(req.user.id);
        res.json(user);
    };
}

module.exports = AuthController;