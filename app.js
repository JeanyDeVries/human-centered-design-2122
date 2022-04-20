const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 1000;

// Hierdoor kan ik CSS en JS bestanden aan de client side uitlezen
app.use(express.static('public'));

//Let the app listen to ejs views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));


app.get('/', function (req, res) {
    res.render('index', {

    })
})

app.listen(port);