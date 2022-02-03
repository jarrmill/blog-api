const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./', 'views'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Serving from port ${port}`);
})
