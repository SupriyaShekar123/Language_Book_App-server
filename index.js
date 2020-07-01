const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const jsonParser = express.json();
app.use(jsonParser);
const User = require("./routers/user");

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

app.use("/", User);
