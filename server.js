const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Node fungerar");
});

app.get("/shop", (req, res) => {
  res.send("Välkommen till shoppen");
});

app.get("/api", (req, res) => {
  res.json({ message: "API endpoint" });
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hej ${name}!`);
});

app.get("/veckodag/:antal", (req, res) => {
  const antal = parseInt(req.params.antal, 10);
  if (isNaN(antal)) {
    return res.status(400).send("Ange ett heltal.");
  }
  const veckodagar = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag",
  ];

  const veckodag = veckodagar[antal % 7];
  res.send(`Veckodag: ${veckodag}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
