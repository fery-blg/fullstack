const db_connect = require("./config/debit");
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
db_connect(process.env.MONGODB_URL);
app.use(
  cors({
    origin: `${process.env.REACT}`,
    credentials: true,
  })
);

app.use(require("./routes/auth.route"));
app.use(cookieParser())

app.listen(3000, () => {
  console.log("listening on port 3000");
});
