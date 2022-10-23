const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const AdminRoutes = require("./routes/adminAuth");
//express app
const app = express();
//DB connections
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to the db");
});
//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
app.use("/api/v1", authRoutes);
app.use(AdminRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist/"));
  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
}
//listening server
const port = process.env.PORT || 7000;
app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
