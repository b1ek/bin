const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const content = require('../helpers/content');

async function index(req, res) {
    res.render('main', {
        maxlen: process.env.MAXLEN,
        submitted: content.submitted()
    });
}

router.get('/', handler(index));

module.exports = router;