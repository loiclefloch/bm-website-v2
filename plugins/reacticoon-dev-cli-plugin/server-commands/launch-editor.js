// const launchEditor = require('react-dev-utils/launchEditor')
// TODO: use the react-dev-utils one once found a way to fix our problem
const launchEditor = require('../utils/launchEditor')

function CommandLaunchEditor(req, res) {
  // TODO: redirect console log to our api response
  // TODO: fix to really launch on editor..
  // see https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/launchEditor.js
  // https://github.com/facebook/create-react-app/blob/4562ab6fd80c3e18858b3a9a3828810944c35e36/packages/react-dev-utils/errorOverlayMiddleware.js

  const lineNumber = parseInt(req.body.payload.lineNumber, 10) || 1
  const colNumber = parseInt(req.body.payload.colNumber, 10) || 1
  launchEditor(req.body.payload.fileName, lineNumber, colNumber)

  res.json({
    success: true,
  })
}

module.exports = CommandLaunchEditor
