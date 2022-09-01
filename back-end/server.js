const express = require("express");
const crypto = require("crypto");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.text());

app.post("/", (req, res) => {
  let emailhash = crypto
    .createHash("sha256")
    .update(req.body.email)
    .digest("hex");
  let passwordhash = crypto
    .createHash("sha1")
    .update(req.body.password)
    .digest("hex");
  res.json({ EmailHash: emailhash, PasswordHash: passwordhash });
});

app.listen(port, () => {
  console.log(`The server is listen on port ${port} and says "I am alive" `);
});
