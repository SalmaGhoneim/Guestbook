const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const passport = require("passport");
const User = require("../models/user");

// Get all messages
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const messages = await Message.find();
      // populate author name of message and replies
      res.status(200).json({ data: messages });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Creating one message
router.post("/", async (req, res) => {
  const message = new Message({
    text: req.body.text,
    // from: req.user.id,
  });
  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Update one
router.patch("/:id", getMessage, async (req, res) => {
  // only the replies & the text can be changed in a message
  if (req.body.text) {
    res.message.text = req.body.text;
  }
  if (req.body.reply != null) {
    // TODO: here is reply in the body");
    let newReplies = res.message.replies;
    try {
      // TODO: save curr user
      // let newReply = { from: req.user._id, text: req.body.reply };
      let newReply = req.body.reply;
      newReplies.push(newReply);
      res.message.replies = newReplies;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  try {
    const updatedMessage = await res.message.save();
    res.json(updatedMessage);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
// Delete one
router.delete("/:id", getMessage, async (req, res) => {
  try {
    // TODO: make sure the author === curr user
    await res.message.remove();
    res.status(200).send({ message: "Deleted message successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

async function getMessage(req, res, next) {
  let message;
  try {
    message = await Message.findById(req.params.id);
    if (message === null) {
      return res.status(404).json({ message: "Cannot find message" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.message = message;
  next();
}

module.exports = router;
