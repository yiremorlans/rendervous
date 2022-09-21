const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comment: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  likes: {
    type: Number,
    required: true,
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);