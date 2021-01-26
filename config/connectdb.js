const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const mongoUrl = process.env.mongoUrl;
const connectdb = () => {
  mongoose.connect(
    mongoUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      else console.log("DB is connected");
    }
  );
};

module.exports = connectdb;
