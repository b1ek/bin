require('dotenv').config({});
if (process.env.APP_DEBUG) {
    process.env.DEBUG = '*/*';
}

const { APP_PORT } = process.env;

const express = require('express');
const app = express();

const routes = require('./routes');
const middleware = require('./middleware');

app.use(middleware);
app.use(routes);
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

const server = app.listen(APP_PORT, () => {
    console.log('Running on port ' + APP_PORT);
});

function graceful_exit() {
    console.log('Exiting...');
    server.closeAllConnections();
    server.close((err) => {
        if (err) console.error(err);
        process.exit(0);
    })
}

process.on('SIGINT', graceful_exit);
process.on('SIGTERM', graceful_exit);