const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//routes

router.get("/getUsers", async (req, res) => {
  const user = await User.find();
  let { password, ...data } = user;
  res.send(data);
});
router.post("/register", async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  let value = await req.body.password;
  if (value != req.body.repeatPassword) {
    {
      res.status(400).send({ message: "password does not match" });
    }
  } else if (emailExist) {
    res.status(400).send({ message: "email already in use" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
        repeatPassword: hashedPassword,
      });
      const savedUser = await user.save();
      res.status(201).send({
        message: `${user.email}, created!`,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

router.post("/login", async (req, res) => {
  //checking if email exists
  const userdt = await User.findOne({ email: req.body.email });
  if (!userdt) {
    return res.status(400).json({ message: "Username is not found" });
  } else {
    //validating if password is correct
    const validPass = await bcrypt.compare(req.body.password, userdt.password);
    if (!validPass) {
      return res.status(400).json({ message: "Email or Password is wrong" });
    } else {
      res.status(200).json({ message: `Welcome you're signed in` });
    }
  }
});
//export router
module.exports = router;
