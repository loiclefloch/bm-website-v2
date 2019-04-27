const createCheck = require('create-reacticoon-app/checkup/utils/createCheck')
const paths = require('create-reacticoon-app/utils/paths')
const Filesystem = require('create-reacticoon-app/utils/Filesystem')

const run = ({ check, warn }) => {
  const path = `${paths.projectDir}/test/api-mocks`
  warn(
    `${Filesystem.directoryExists(path)} api mockup directory exists`,
    `api mockup directory does not exists ${path}`
  )
}

module.exports = createCheck({
  name: 'Check api mockup directory',
  description: 'Check that the api mockup directory exists',
  run,
})
