const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/creatComment/:id", commentController.createComment);

router.put("/likeComment/:id", commentController.likeComment);

router.delete("/deleteComment/:id/:commentid", commentController.deleteComment);

module.exports = router;