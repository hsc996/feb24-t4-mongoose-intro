// Purpose:
// First point of entry
// Initialise the server
// Get the port
// Tell the server to listen to the web traffic

require("dotenv").config();

// Server is configured in this file, not in index.js:
const { app } = require("./server.js");
const { dbConnect } = require("./utils/database.js")

// Get the PORT
const PORT = process.env.PORT || 8080;

// Tell the server to listen to the web traffic
app.listen(PORT, async () => {

    await dbConnect();

    console.log(`Server listening on port ${PORT}`)
});