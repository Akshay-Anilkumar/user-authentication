const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require('./src/routes/userRoutes');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/user-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

const PORT = 3000;

app.use('/user', userRoutes);
app.use('/book', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});