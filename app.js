const express = require("express");
var cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(cors({ origin: "*" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/login/", require("./controllers/login.controller"));

app.listen(port, () => {
  console.log(`BE app listening at http://localhost:${port}`);
});
