const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const content = require('../helpers/content');

const { MAXFILES } = process.env;

async function upload(req, res) {

    if (content.submitted() >= MAXFILES) {
        res.status(405).send('Not allowed');
        return;
    }

    const data = req.body.text;

    if (data.length < 8) {
        res.send('Too short');
        return;
    }

    const id = await content.create(data);
    res.redirect(
        '/view?id=' + encodeURIComponent(id)
    );
}

router.post('/upload', handler(upload));

module.exports = router;