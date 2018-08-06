const express = require('express');

const router = express.Router();

const ctrlView = require('../../controllers/view.controller');

/**
 * GET /search
 */
router.route('/')
  .get(ctrlView.get);

module.exports = router;
