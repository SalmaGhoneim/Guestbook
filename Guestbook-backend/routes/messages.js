const express = require("express");
const router = express.Router();
const Message = require("../models/message");

// Get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ data: messages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one message
router.get("/:id", getMessage, (req, res) => {
  res.send(res.message);
});

// Creating one message
router.post("/", async (req, res) => {
  const message = new Message({
    text: req.body.text
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
  if (req.body.reply != null) {
    let newReplies = res.message.replies;
    newReplies.push(req.body.reply);
    res.message.replies = newReplies;
  }
  if (req.body.text != null) {
    res.message.text = req.body.text;
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
