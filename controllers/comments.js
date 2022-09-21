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
      let comment = await Comment.findOne({_id: req.params.id})
      console.log(comment.id, req.params.id)
      let likedComment = comment.likedBy.includes(req.user.id)
      if (likedComment) {
        await Comment.findOneAndUpdate(
          { _id: comment.id },
          {
            $inc: { likes: -1 },
          }
        );
        await Comment.findOneAndUpdate(
          { _id: comment.id},
          {
            $pull: { likedBy: req.user.id },
          }
        );
        console.log("Likes -1")
      } else {
        await Comment.findOneAndUpdate(
          { _id: comment.id },
          {
            $inc: { likes: 1 },
          }
        );
        await Comment.findOneAndUpdate(
          { _id: comment.id },
          {
            $push: { likedBy: req.user.id },
          }
        );
        console.log("Likes +1");
      }
      res.redirect('back');  //functional but returns back to the top in feed.ejs
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({ _id: req.params.commentid });
      console.log("Deleted comment");
      res.redirect("back");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};