const express = require('express');
const mongodb = require('./data/database');

const app = express();
const port = process.env.PORT || 3000;
// Esto habilita CORS para todas las rutas

app.use('/', require('./routes'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening an node Running on port ${port}`);
    });
  }
});
