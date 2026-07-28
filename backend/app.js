require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
const apiRoutes = require("./routes/api.routes");
const authRoutes = require("./routes/auth.routes");
const securityRoutes = require("./routes/security.routes");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { verifyTokenAndAuthenticateUser } = require("./auth/jwt");

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);
app.use("/api/security/scans", verifyTokenAndAuthenticateUser, securityRoutes);

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

