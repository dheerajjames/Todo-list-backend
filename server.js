const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
mongoose.set('useFindAndModify', false);

const { DB_LOCAL, PORT } = process.env;

mongoose
  .connect(DB_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((connection) => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server Started ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });
