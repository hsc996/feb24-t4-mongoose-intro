
const { createPost, findOnePost, findManyPosts } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");
const { createUser } = require("./crud/UserCrud.js");

require("dotenv").config();

async function seed(){

    let newUser = await createUser("hannahs", true, "hjs@gmail.com");

    // await dbConnect()
    await createPost(
        "Example title",
        "Example content",
         newUser.id
        );

    let resultFindOne = await findOnePost({
        title: "Example title",
        content: "Example content"
    });

    console.log(resultFindOne.title);
    console.log(resultFindOne._id);
    console.log(resultFindOne.id);

    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
});