const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const content = require('../helpers/content');

async function view(req, res) {
    const data = await content.get(req.query.id);
    if (req.query.raw) {
        res.header('Content-Type', 'text/plain');
        res.send(data);
        return;
    }
    res.render('view', {data, id: req.query.id});
}

router.get('/view', handler(view));

module.exports = router;