const express = require('express');

const router = express.Router();

const searchRoute = require('./search.route');
const viewRoute = require('./view.route');

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/search', searchRoute);

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/views', viewRoute);
module.exports = router;
