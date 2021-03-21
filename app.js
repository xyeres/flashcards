const { response } = require("express");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Hi there, developer!!</h2>');
});


app.listen(3000, () => {
    console.log('the aplication is running on localhost:3000')
});


