const express = require('express');
const router = express.Router();

router.use(require('./main'));
router.use(require('./upload'));
router.use(require('./view'));

module.exports = router;