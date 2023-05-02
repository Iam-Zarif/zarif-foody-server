const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const homeCard =require('./Data/HomeCard.json');

app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/homeCard',(req,res) =>{
    res.send(homeCard);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
