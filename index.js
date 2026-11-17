const express=require('express');
const app=express()

const ejs = require("ejs");
app.set('view engine','ejs')

app.get("", (req, res) => {
  res.render("index", { title: "Hoooooooooo" });
});





app.use(express.json());



app.listen(4000, () => {
  console.log("Server running on http://localhost:3000");
});

