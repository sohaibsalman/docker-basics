const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.contentType("text/html");
  res.send("<h1> Hello from nodejs in Docker!");
});

app.listen(3000, () => {
  console.log("Node server is running at port 3000");
});