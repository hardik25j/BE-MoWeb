require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes');
const { database, port } = keys;
const app = express();

// Connect to MongoDB
mongoose.set('useCreateIndex', true);
mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() =>
    console.log('MongoDB Connected!')
  )
  .catch(err => console.log(err, database));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


app.get("/", (req, res) => {
  res.json([{'hello':'hardik'}]);
});

app.listen(3005);
