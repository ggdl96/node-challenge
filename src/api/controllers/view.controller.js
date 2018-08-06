const fs = require('fs');
const path = require('path');


function get(req, res, next) {
  fs.readFile(path.join(__dirname, '/../../views/view.html'), (err, data) => {
    if (err) {
      throw err;
    }

    res.render(data);
  });
}

module.exports = { get };
