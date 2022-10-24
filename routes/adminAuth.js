const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtUser = require("../model/admin");
//routes
router.post("/api/user/AdminRegister", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new jwtUser({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
  let { password, ...data } = user.toJSON();
  res.send({ message: `${data.name} Added as Admin` });
});

router.post("/api/user/AdminLogin", async (req, res) => {
  try {
    let user = await jwtUser.findOne({ email: req.body.email });
    let { password, ...data } = user.toJSON();
    let validPass = await bcrypt.compare(req.body.password, user.password);
    if (!user) {
      console.log("User not found");
      return res.json({ message: "User not found" });
    } else if (!validPass) {
      return res.status(400).send({ message: "Invalid Credential" });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 100, //i day
      });
      res.send({ message: "success" });
    }
  } catch (error) {
    res.status(400).send({ message: "Invalid Credentials!" });
  }
});
router.get("/api/user", async (req, res) => {
  try {
    const cookie = req.cookies;

    const claim = jwt.verify(cookie.jwt, process.env.TOKEN_SECRET);
    if (!claim) {
      return res.status(401).send({ message: "Unauthenticated" });
    }
    const user = await jwtUser.findOne({ _id: claim._id });
    let { password, ...data } = user.toJSON();
    console.log(data);
    return res.send({ message: data });
  } catch (error) {
    return res.status(401).send({ message: "Unauthenticated" });
  }
});
router.post("/api/user/AdminLogout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });

  return res.send({ message: "You're logged out!!" });
});
//export router
module.exports = router;
