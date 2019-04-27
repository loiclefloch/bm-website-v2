// List all files in a directory in Node.js recursively in a synchronous fashion
// https://gist.github.com/kethinov/6658166
// TODO: handle subfolders
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir)
  filelist = filelist || []
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist)
    } else {
      filelist.push({ file, dir })
    }
  })
  return filelist
}

function listFiles() {
  return {
    TEST: 42,
    '//': 'It works :D',
    walk: walkSync(__dirname + '/../../../test/api-mocks/'),
  }
}

module.exports = listFiles
