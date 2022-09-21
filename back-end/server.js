const express = require("express");
const crypto = require("crypto");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { CLIENT_RENEG_LIMIT } = require("tls");
const { Users } = require("./model/user.model");
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  const user = req.body;

  const decodedPassword = Buffer.from(user.password, "base64").toString();
  //let emailhash = crypto.createHash("sha256").update(user.email).digest("hex");
  const passwordhash = crypto
    .createHash("sha1")
    .update(decodedPassword)
    .digest("hex");
  // Users.find({email: user.email})
  const createdUser = await Users.create({
    email: user.email,
    password: passwordhash,
  });
  console.log(createdUser);

  res.json({ PasswordHash: passwordhash });
  res.redirect("/");
});

const mongoUrl =
  "mongodb+srv://admin:admin@cluster0.dnagki1.mongodb.net/?retryWrites=true&w=majority";
mongoose.connection.once("open", () => console.log("connected to mongoDB"));
try {
  mongoose.connect(mongoUrl);
} catch (err) {
  console.log(err);
}

app.listen(port, () => {
  console.log(`The server is listen on port ${port} and says "I am alive" `);
});
