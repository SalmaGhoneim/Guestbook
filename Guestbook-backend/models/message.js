const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  //   writer: {
  //     type: Schema.Types.ObjectId, ref: 'User'

  //   },
  text: {
    type: String,
    required: true
  },
  replies: {
    type: Array,
    required: true,
    default: []
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", messageSchema);
