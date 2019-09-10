const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Make get request");
});

server.post("/", (req, res) => {});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
