const express = require("express");
const app = express();

//app.verb(path, callback);
app.get("/", (request, response) => {
    // response.send("<h1>Hello, world!</h1>");

    response.json({
        message: "Hello world"
    });
});

module.exports = { app }

// Server app configuration is finished by this point
// Export the app so that other files can control when the server