const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const homeCard =require('./Data/HomeCard.json');

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/homeCard',(req,res) =>{
    res.send(homeCard);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
