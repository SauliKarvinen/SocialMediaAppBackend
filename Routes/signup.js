const express = require("express");
const router = express.Router();
const User = require("../Database/Schemas/User");
const auth = require("../Authentication/auth");
const hashPassword = require("../Authentication/passwordhash");

router.get("/", (req, res) => {
  res.sendStatus(200);
});

// Signup
router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === "" || password === "") {
    res.sendStatus(400);
    return;
  }

  const emailExists = await User.findOne({ email: email });

  if (emailExists) {
    res.json({ status: "error", message: "Email already exists!" }).status(400);
    return;
  }

  const hashedPassword = await hashPassword.hashpw(password);

  try {
    // Try to add new user
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    newUser.save();

    // After signup send added user and token to user
    const token = auth.createToken({ user: email });
    res.json({ userdata: newUser, token: token }).status(200);
    return;
  } catch (err) {
    console.error("Signup failed at /POST /signup");
    res.status(400);
    return;
  }
});

router.delete("/", async (req, res) => {
  const result = await User.deleteMany({ email: "user@email.com" });
  res.json({ deleted: result.deletedCount });
});

module.exports = router;
