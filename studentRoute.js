const express=require("express");
const Router= express.Router();
const studentController = require("./studentController");

Router.get("/index",studentController.index);
Router.get("/show/:id",studentController.show);
Router.post("/store",studentController.store);
Router.put("/update/:id",studentController.update);
Router.delete("/delete/:id",studentController.delete);

module.exports = Router;