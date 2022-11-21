const Post = require("../model/postModel");

const createPost = async (req, res) => {
  try {
    const result = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { createPost };
