const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genres: { type: [String], default: [] },
  director: String,
  banner: String,
  trailer: String,
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Movie", movieSchema);
