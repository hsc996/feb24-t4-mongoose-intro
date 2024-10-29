const mongoose = require("mongoose");

const { PostModel } = require("../models/PostModel");

// Function to connet to whatever DB out environment variable says to connect to
async function dbConnect(){
    let databaseUrl = process.env.DATABASE_URL || `mongo://127.0.0.1:27017/${process.env.npm_package_name}`

    await mongoose.connect(databaseUrl);
}

module.exports = {
    dbConnect
}