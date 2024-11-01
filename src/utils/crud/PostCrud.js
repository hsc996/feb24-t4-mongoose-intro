// Provide CRUD functions for the PostModel

const { PostModel } = require("../../models/PostModel");


async function createPost (title, content = null) {
    let result = await PostModel.create({
        title: title,
        content: content
    });
    // leaving "date" out since its default is Date.now

    return result;
}

// "query" in mongoose is just an object - by using this as the parameter, it's flexible to the request
// findOnePost({title: "Alex's Cool Blog Post"})
async function findOnePost (query) {
    let result = await PostModel.findOne(query);

    return result;

}

async function findManyPosts (query) {
    let result = await PostModel.find(query);
    
    return result;
}

async function updatePost () {

}

async function updatePosts () {

}

async function deleteOnePost () {

}

async function deleteManyPosts () {

}

module.exports = {
    createPost,
    findOnePost, findManyPosts,
    updatePost, updatePosts,
    deleteOnePost, deleteManyPosts
}