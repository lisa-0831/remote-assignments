const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser());

app.set('view engine', 'pug');

app.use(express.static('public'))

app.use(routes);

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});
