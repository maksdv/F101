const Article = require("../models/article.model.js");

// Create and Save a new Article
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Article content can not be empty"
    });
  }

  // Create a Article
  const article = new Article({
    title: req.body.title || "Untitled Article",
    description: req.body.content
  });

  // Save Article in the database
  article
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article."
      });
    });
};

// Retrieve and return all articles from the database.
exports.findAll = (req, res) => {
  Article.find()
    .then(articles => {
      res.send(articles);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving articles."
      });
    });
};
