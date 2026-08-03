import Database from "./Database.js";

export default class MongoDatabase extends Database {
    save() {
        console.log("Saving data to MongoDB...");
    }
}