// import packages
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customer.route");

// create an instance of express
const app = express();

// middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Haladin bank app");
});

// mount routes
app.use("/api/v1/customer", customerRoutes);


connectDB();

// catch 404 errors and forward them to error handler
app.use((req, res, next) => {
  const error = new Error("Not found 😥");
  error.status = 404;
  next(error);
});

// Global error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Something went wrong 🔥🔥🔥🔥🔥🔥",
    },
  });
});




module.exports = app;
