const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');

async function index(req, res) {
    res.render('main', {maxlen: process.env.MAXLEN});
}

router.get('/', handler(index));

module.exports = router;