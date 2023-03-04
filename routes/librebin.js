const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');

async function indexphp(req, res) {
    if (req.query.p) {
        res.redirect('/view?id=' + req.query.p);
        return;
    }
    res.status(400).send('Bad request');
    rerturn;
}

async function p(req, res) {
    if (!req.params.id) {
        res.status(400).send('Bad request');
        return;
    }
    res.redirect('/view?id=' + req.params.id + "&raw=true");
    return;
}

router.use('/index.php', handler(indexphp));
router.use('/p/:id', handler(p));

module.exports = router;