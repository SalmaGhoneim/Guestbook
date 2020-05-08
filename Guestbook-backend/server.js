// Getting env variables if not in production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// Using Express
const express = require("express");
const app = express();

// Database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// Setting up route for "/"
const guestbookRouter = require("./routes");
app.use("/", guestbookRouter);

// Accepting json
app.use(express.json());

// Setting up port
app.listen(process.env.PORT || 3000, () => console.log("Server Started"));

// app.use(express.static("public"));
