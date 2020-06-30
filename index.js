const express = require("express");
const app = express();
const cors = require("cors");

const jsonParser = express.json();
app.use(jsonParser);
app.use(cors());
const corsMiddleware =cors();

const PORT = 5000;


app.listen(PORT, () => {
  console.log("Listening on port");
});

//routers
const User = require("./routers/user");
app.use("/signup", User);

const userLogin = require("./routers/auth")
app.use("/login", userLogin)
