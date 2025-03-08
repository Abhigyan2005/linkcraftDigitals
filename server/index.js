const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/newsletter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed!" });
    }
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error subscribing. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
