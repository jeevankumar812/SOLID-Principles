import Database from "./Database.js";

export default class MySQLDatabase extends Database {
    save() {
        console.log("Saving data to MySQL...");
    }
}