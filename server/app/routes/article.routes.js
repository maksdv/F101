module.exports = app => {
  const articles = require("../controllers/article.controller.js");

  // Create a new Article
  app.post("/articles", articles.create);

  // Retrieve all Article
  app.get("/articles", articles.findAll);
};
