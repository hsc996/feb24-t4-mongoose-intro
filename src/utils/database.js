const { PostModel } = require("../models/PostModel");
const mongoose = require("mongoose");

// Function to connect to whatever DB out environment variable says to connect to
async function dbConnect(){
    console.log(process.env.DATABASE_URL);
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;

    await mongoose.connect(databaseUrl);
}

// Function to close the database connection
async function dbDisconnect(){
    await mongoose.connection.close();
}

// Drop all databases
async function dbDrop(){
    await mongoose.connection.db.dropDatabase();
}

module.exports = {
    dbConnect,
    dbDisconnect,
    dbDrop
}