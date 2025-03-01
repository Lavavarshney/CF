const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  username: { type: String, default: "Anonymous" },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  replies: { type: [this], default: [] }, // Recursive reference for replies
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

const PostSchema = new mongoose.Schema({
  username: { type: String, default: "Anonymous" },
  category: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: null },
  likes: { type: Number, default: 0 },
  comments: { type: [CommentSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;