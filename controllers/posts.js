const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment")
const User = require("../models/User")

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "asc" }).lean();
      res.render("feed.ejs", { posts: posts, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const postUser = await User.findById(post.user)
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "asc" }).lean();
      res.render("post.ejs", { post: post, user: req.user, comment: comments, postUser: postUser});
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
        userName: req.user.userName,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      const likedPost = post.likedBy.includes(req.user.id)
      if (likedPost) {
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likes: -1 },
          }
        );
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            $pull: { likedBy: req.user.id },
          }
        );
        console.log("Likes -1")
      } else {
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likes: 1 },
          }
        );
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: { likedBy: req.user.id },
          }
        );
        console.log("Likes +1");
      }
      res.redirect('back'); //functional but returns back to the top in feed.ejs
      // res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/feed");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};