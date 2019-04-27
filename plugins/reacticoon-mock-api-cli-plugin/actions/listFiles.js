const Filesystem = require('create-reacticoon-app/utils/Filesystem')

function listFiles() {
  return {
    '//': 'It works :D',
    tree: Filesystem.getTree(__dirname + '/../../../test/api-mocks/'),
  }
}

module.exports = listFiles
