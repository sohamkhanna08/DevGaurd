require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
const apiRoutes = require("./routes/api.routes");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:` + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
