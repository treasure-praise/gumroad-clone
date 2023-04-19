const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" }); //load env vars

const app = express(); //instance of express

//route files
const products = require("./routes/products");

//mount routers
app.use("/api/v1/products", products);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `
  );
});
