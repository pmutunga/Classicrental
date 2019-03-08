var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Load cars page
  app.get("/cars", function(req, res) {
    db.Car.findAll({}).then(function(dbCars) {
      res.render("cars", {
        msg: "Welcome!",
        cars: dbCars
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load car page and pass in a car by id
  app.get("/carpage/:id", function(req, res) {
    db.Car.findOne({ where: { id: req.params.id } }).then(function(dbCar) {
      res.render("carpage", {
        example: dbCar
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
