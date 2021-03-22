const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser())

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello')
});

app.get('/hello', (req, res) => {
    if (!req.cookies.username) {
        res.render('hello');
    } else {
        res.redirect('/')
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');

});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is buried in grants two?", colors})
});

app.get('/names', (req, res) => {
    res.render('names', {names})
})

app.listen(3001, () => {
    console.log('the aplication is running on localhost:3001');
});


