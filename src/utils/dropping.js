const { dbDrop, dbConnect, dbDisconnect } = require("./database");


async function drop(){

    await dbDrop();

    console.log("All databases dropped, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Databases dropped.");
    drop();
});