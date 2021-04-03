const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./application/authRoute')(app);


app.listen(8080, () => {
    console.log('API working...')
});
