const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// parsing data jadi json
app.use(express.json());

// koneksi ke mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Koneksi Sukses Boss!"))
  .catch((error) => console.log("⛔ Ada masalah Boss!"));

//   membuat rute
app.use("/api/movies", movieRoutes);

// jalankan server
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`🚀 Server berjalan di http://localhost:${port}`),
);
