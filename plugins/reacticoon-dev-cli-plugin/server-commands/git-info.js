const getGitInfo = require('../actions/getGitInfo')

function CommandGitInfo(req, res) {
  res.json(getGitInfo())
}

module.exports = CommandGitInfo
