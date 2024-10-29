// Purpose:
// First point of entry
// Initialise the server
// Get the port
// Tell the server to listen to the web traffic

// Server is configured in this file, not in index.js:
const { app } = require("./server.js");

// Get the PORT
const PORT = process.env.PORT || 8080;

// Tell the server to listen to the web traffic
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});