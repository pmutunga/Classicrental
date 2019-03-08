var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get all cars
  app.get("/api/cars", function(req, res) {
    db.Car.findAll({}).then(function(dbCars) {
      res.json(dbCars);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new car
  app.post("/api/cars", function(req, res) {
    db.Car.create(req.body).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Delete a car by id
  app.delete("/api/cars/:id", function(req, res) {
    db.Car.destroy({ where: { id: req.params.id } }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
};
