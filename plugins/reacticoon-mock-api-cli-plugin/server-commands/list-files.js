const listFiles = require('../actions/listFiles')

function CommandCheckup(req, res) {
  const filesList = listFiles()

  res.json(filesList)
}

module.exports = CommandCheckup
