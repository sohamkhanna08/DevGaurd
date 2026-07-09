require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;
const apiRoutes = require("./routes/api.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
