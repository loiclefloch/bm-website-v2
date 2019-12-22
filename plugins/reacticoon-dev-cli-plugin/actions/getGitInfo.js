const trim = require('lodash/trim')
const Command = require('create-reacticoon-app/cli-utils/cmd')

function getCurrentBranch() {
  const res = Command.getSync('git branch | grep \\* | cut -d " " -f 2')
  return res
}

function getDetail() {
  const res = Command.getSync('git log --name-status HEAD^..HEAD')
  const logExploded = res.split('\n')

  return {
    author: trim(logExploded[1].substr('Author: '.length)),
    date: trim(logExploded[2].substr('Date: '.length)),
    commitId: trim(logExploded[0].substr('commit '.length)),
    message: trim(logExploded[4]),
  }
}

function getGitInfo() {
  return {
    ...getDetail(),
    currentBranch: getCurrentBranch(),
  }
}

module.exports = getGitInfo
