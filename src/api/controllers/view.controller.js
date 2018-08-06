const path = require('path');


function get(req, res, next) {
  res.sendFile(path.join(__dirname, '/../../views/view.html'));
}

module.exports = { get };
