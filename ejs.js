const express = require("express");

var app = express();
app.set("view engine", "ejs");
app.use("/style", express.static("styles"));

app.get("/", (req, res) => {
  res.render("pages/index");
});
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});
app.get("/profile/:name", (req, res) => {
  var data = {
    age: 22,
    job: "Developer",
    hobbies: ["Over Thinking", "Eating", "Sleeping"]
  };
  res.render("/pages/profile", { person: req.params.name, data: data });
});

app.listen(3000);
console.log("LISTENING 3000");
