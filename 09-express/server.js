const express = require("express");
const app = express();
const port = 3000;

// Parsing data ke JSON
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.json({
    message: "Wilujeng Sumping di API abdi..",
    status: "success 🤸‍♀️",
  });
});

// Jalankan Server
app.listen(port, () => {
  console.log(`Server parantos jalan di http://localhost:${port}`);
});
