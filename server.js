const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require("./data/database");
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening an node Running on port ${port}`);
    });
  }
});


app.use("/", require("./routes"));
