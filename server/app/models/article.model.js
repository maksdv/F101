const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    price: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Article", ArticleSchema);
