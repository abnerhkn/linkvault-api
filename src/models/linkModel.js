const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: {
    type: String,
    enum: ["frontend", "backend", "devops", "design", "outros"],
    required: true,
  },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Link", LinkSchema);
