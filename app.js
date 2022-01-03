const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portudna başlatıldı`);
});
