import UserService from "./UserService.js";
import MySQLDatabase from "./MySQLDatabase.js";
import MongoDatabase from "./MongoDatabase.js";

// MySQL
const mysql = new MySQLDatabase();
const user1 = new UserService(mysql);
user1.registerUser();

// MongoDB
const mongo = new MongoDatabase();
const user2 = new UserService(mongo);
user2.registerUser();