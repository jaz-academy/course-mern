const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Parsing data ke JSON
app.use(express.json());

// Membaca file JSON
function readFile() {
  const data = fs.readFileSync("./products.json", "utf-8");
  return JSON.parse(data);
}

// Route
app.get("/", (req, res) => {
  res.json({
    message: "Wilujeng Sumping di API abdi..",
    status: "success 🤸‍♀️",
  });
});

// Route Get All Product
app.get("/api/products", (req, res) => {
  const products = readFile();
  res.json(products);
});

// Route Get Product By Id
app.get("/api/products/:id", (req, res) => {
  const products = readFile();
  const product = products.find((p) => p.id == req.params.id);
  if (!product)
    return res.status(404).json({ message: "Punten, ID teu kapendak.." });
  res.json(product);
});

// Jalankan Server
app.listen(port, () => {
  console.log(`Server parantos jalan di http://localhost:${port}`);
});
