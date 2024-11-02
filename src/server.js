const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.verb(path, callback);
app.get("/", (request, response) => {
    // response.send("<h1>Hello, world!</h1>");

    response.json({
        message: "Hello world"
    });
});

const PostController = require("./controllers/PostController");
app.use("/posts", PostController);

module.exports = { app }

// Server app configuration is finished by this point
// Export the app so that other files can control when the server