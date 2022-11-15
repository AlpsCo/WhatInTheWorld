const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.json());

// serving static files, which we dont have yet lol 
// app.use('/', express.static(path.resolve(__dirname, '../assets')));

// serving bundle.js in ../dist
app.use('/dist', express.static(path.join(__dirname, '../dist')));



app.get("/",
(req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})






app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
})