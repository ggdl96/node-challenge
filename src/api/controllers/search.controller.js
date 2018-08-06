
const searchService = require('../services/search.service');

async function get(req, res, next) {
  searchService.search(req.query.search)
    .then(req => res.json({ status: true, text: req }))
    .catch(err => next(err));
}

module.exports = { get };
