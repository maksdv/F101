const Article = require("../models/article.model.js");

// Create and Save a new Article
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: "Article can not be empty",
    });
  }
  const article = new Article({
    title: req.body.title,
    description: req.body.description || "Description",
    price: req.body.price || "0",
  });

  // Save Article in the database
  article
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article.",
      });
    });

  // Create a Article
};

// Retrieve and return all articles from the database.
exports.findAll = (req, res) => {
  Article.find()
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles.",
      });
    });
};
