const express = require("express");
const app = express();
app.use(express.json());
// connect to db
const connectdb = require("./config/connectdb");
connectdb();
// user routers
app.use("/", require("./router/userRouter"));
//  create server
app.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("Server running on port 5000");
});
