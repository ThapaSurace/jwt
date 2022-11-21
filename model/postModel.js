const mongoose = require("mongoose")
const Post = mongoose.Schema

const postSchema = new Post({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Post",postSchema)