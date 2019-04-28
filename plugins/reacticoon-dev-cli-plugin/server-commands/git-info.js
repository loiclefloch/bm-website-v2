const getGitInfo = require('../actions/getGitInfo')

function CommandCheckup(req, res) {
  res.json(getGitInfo())
}

module.exports = CommandCheckup
