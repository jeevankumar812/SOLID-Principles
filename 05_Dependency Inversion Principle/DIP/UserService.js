export default class UserService {
    constructor(database) {
        this.database = database;
    }

    registerUser() {
        this.database.save();
    }
}