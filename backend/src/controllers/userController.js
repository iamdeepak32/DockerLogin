// filepath: /c:/Users/User/Music/New folder/user-form-app/backend/src/controllers/userController.js
class UserController {
    constructor() {
        this.users = [];
    }

    generateUniqueId() {
        return 'user-' + Date.now(); // Simple unique ID generation
    }

    validateUserData(userData) {
        const { fullName, email, age, gender, address } = userData;
        const errors = [];

        if (!fullName || fullName.length < 3) {
            errors.push('Full Name is required and must be at least 3 characters long.');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.push('A valid Email Address is required.');
        }
        if (!age || age < 18) {
            errors.push('Age must be a number and at least 18.');
        }
        if (!gender) {
            errors.push('Gender is required.');
        }
        if (!address || address.length < 10) {
            errors.push('Address is required and must be at least 10 characters long.');
        }

        return errors;
    }

    createUser(req, res) {
        const userData = req.body;
        const errors = this.validateUserData(userData);

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const id = this.generateUniqueId();
        const newUser = { id, ...userData };
        this.users.push(newUser);
        res.status(201).json(newUser);
    }
}

module.exports = new UserController();