
const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database
const db = new sqlite3.Database(
    "./database/kitchen.db",
    (err) => {
        if (err) {
            console.error("Database connection failed:", err.message);
        } else {
            console.log("Connected to KitchenKeys database");
        }
    }
);

// Create database tables
db.serialize(() => {

    // Enable foreign keys
    db.run("PRAGMA foreign_keys = ON");

    // 1. Create Chefs table
    db.run(`
        CREATE TABLE IF NOT EXISTS chefs (
            chef_id INTEGER PRIMARY KEY AUTOINCREMENT,
            chef_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Chefs table created successfully");
        }
    });

    // 2. Create Stations table
    db.run(`
        CREATE TABLE IF NOT EXISTS stations (
            station_id INTEGER PRIMARY KEY AUTOINCREMENT,
            station_name TEXT NOT NULL,
            cuisine TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Stations table created successfully");
        }
    });

    // 3. Create Bookings table
    db.run(`
        CREATE TABLE IF NOT EXISTS bookings (
            booking_id INTEGER PRIMARY KEY AUTOINCREMENT,
            chef_id INTEGER NOT NULL,
            station_id INTEGER NOT NULL,
            booking_date TEXT NOT NULL,
            start_time TEXT NOT NULL,
            end_time TEXT NOT NULL,

            FOREIGN KEY (chef_id)
            REFERENCES chefs(chef_id),

            FOREIGN KEY (station_id)
            REFERENCES stations(station_id)
        )
    `, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Bookings table created successfully");
        }
    });

});

module.exports = db;
