import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bonjour La Remise");
});

app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});