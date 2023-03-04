const express = require('express');
const router = express.Router();
const bodyparse = require('body-parser');

router.use(bodyparse.json());
router.use(bodyparse.urlencoded({extended: true}));

module.exports = router;