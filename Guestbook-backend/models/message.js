const mongoose = require("mongoose");
const User = require("../models/user");

// var replySchema = new mongoose.Schema({
//   from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   text: { type: String },
// });

const messageSchema = new mongoose.Schema({
  from: {
    // TODO
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    // required: true
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  replies: {
    // TODO: create a type for replies
    // type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reply" }],
    type: [String],
    required: true,
    default: [],
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", messageSchema);
// module.exports = mongoose.model("Reply", replySchema);
