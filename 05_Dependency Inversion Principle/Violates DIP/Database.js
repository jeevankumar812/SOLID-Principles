class MySQLDatabase {
    save() {
        console.log("Saving data to MySQL...");
    }
}

class UserService {
    constructor() {
        this.database = new MySQLDatabase();
    }

    registerUser() {
        this.database.save();
    }
}

const user = new UserService();
user.registerUser();