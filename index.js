const port = process.env.PORT || 3000;

const express = require('express');
const translateController = require('./controllers/translate.controller');

const app = express();


app.use(express.json());
app.use(express.urlencoded());

var api = express.Router();

//create services
api.get('/', function test(req, res, next) {
    res.status(200).send({"response":"API it's ok :)"});
    return;
});
api.post('/translate/2text', translateController.morse2Text);
api.post('/translate/2morse', translateController.text2Morse);

app.use('/', api);

const server = app.listen(port, () => {
    console.log('server running on port: ' + port);
});

module.exports = {app, server};