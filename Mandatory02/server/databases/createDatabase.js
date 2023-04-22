import dotenv from "dotenv/config";
import db from "./connection.js";
import bcrypt from "bcrypt";

// Check if the script for the creation of the database has the "delete_mode" argument
const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode){
    db.exec(`DROP TABLE roles;`);
    db.exec(`DROP TABLE users;`);
}

// Creation of Tables.
db.exec(`
    CREATE TABLE IF NOT EXISTS roles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        user_type INTEGER,
        FOREIGN KEY (user_type) REFERENCES roles (id)
    );
`);

// Seeding
const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 8);

if (isDeleteMode) {
    db.run(`INSERT INTO roles (description) VALUES ('admin');`);
    db.run(`INSERT INTO roles (description) VALUES ('regular_user');`);
    db.run(`INSERT INTO users (username, email, password, user_type) VALUES ('admin', 'admin@admin.com', ?, 1);`, [adminPassword]);
}


