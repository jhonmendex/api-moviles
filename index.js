const express = require("express");
const app = express();
const port = 3000;
//const MongoClient = require("mongodb");
//const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/test";
/*
app.get("/", (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send(" sin conexion" + err);
    } else {
      res.send("CONEXIÓN");
      db.close();
    }
  });
}); */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/agenda", (req, res) => {
  res.json([
    { nombre: "jhon", fecha: "2021-21-08" },
    { nombre: "felipe", fecha: "2021-21-08" },
    { nombre: "maria", fecha: "2021-21-08" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
