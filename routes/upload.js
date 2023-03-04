const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const content = require('../helpers/content');

async function upload(req, res) {
    const data = req.body.text;
    const id = await content.create(data);
    res.redirect(
        '/view?id=' + encodeURIComponent(id)
    );
}

router.post('/upload', handler(upload));

module.exports = router;