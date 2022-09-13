const Post = require("../models/Post");

module.exports = {
    getIndex: async (req, res) => {
      try {
        const posts = await Post.find().sort({ createdAt: "desc" }).lean();
        console.log(posts)
        res.render("index.ejs", { posts: posts });
      } catch (err) {
        console.log(err);
      }
    },
  };