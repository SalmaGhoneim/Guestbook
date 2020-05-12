// Getting env variables if not in production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Using Express
const express = require("express");
const app = express();

// enable requests from local frontend
var cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

//

// body parser
var bodyParser = require("body-parser");

// Passport configurations
const passport = require("passport");
require("./passport")(passport);
var session = require("express-session");
app.use(
  session({ secret: "SecretKey", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// Database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));

// Routes
const guestbookRouter = require("./routes/messages");
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
app.use("/messages", guestbookRouter);

// Setting up port
app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
