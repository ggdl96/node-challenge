const express = require('express');
const validate = require('express-validation');
const serachValidate = require('../../validations/search.validation');

const router = express.Router();

const ctrlSearch = require('../../controllers/search.controller');

/**
 * GET /search
 */
router.route('/')
  .get(validate(serachValidate.search), ctrlSearch.get);

module.exports = router;
