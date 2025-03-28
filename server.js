const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongodb = require('./data/database');
app.use(bodyParser.json());
app.use('/', require('./routes'));
app.use(express.json()); // Necesario para req.body

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening an node Running on port ${port}`);
    });
  }
});
