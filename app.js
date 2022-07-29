const express = require('express');
const chalk = require('chalk')
const app = express();
const debug = require('debug')('app');
const mogan = require('morgan');
const port = 3000;

app.use(mogan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    debug("Listening on port" + chalk.green(":" + port));
})