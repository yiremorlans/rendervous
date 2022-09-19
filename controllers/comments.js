const Comment = require("../models/Comment")

module.exports = {
createComment: async (req, res) => {
    try {
      await Comment.create({
        userName: req.user.userName,
        createdById: req.user.id,
        comment: req.body.comment,
        post: req.params.id,
        likes: 0,
      });
      console.log("Comment has been added!");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  likeComment: async (req, res) => {
    try {
      await Comment.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect("back"); //functional but returns back to the top in feed.ejs
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.remove({ _id: req.params.commentid });
      console.log("Deleted comment");
      res.redirect("back");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};