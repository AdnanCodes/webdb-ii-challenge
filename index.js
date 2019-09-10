const express = require("express");

const db = require("./data/db-config");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

server.post("/", (req, res) => {});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
