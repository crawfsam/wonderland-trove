const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
})

app.get('/shop', (req, res) => {
  res.render('shop.ejs')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});

