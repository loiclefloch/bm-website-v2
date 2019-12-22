const createReacticoonPlugin = require('create-reacticoon-app/plugin/createReacticoonPlugin')
const createServerCommand = require('create-reacticoon-app/server/createServerCommand')

const getGitInformationServerCommand = createServerCommand(
  'DEV_TOOLS::GIT_INFO',
  'Retrieve app git information',
  './server-commands/git-info',
  {}
)

module.exports = createReacticoonPlugin({
  checkup: [],
  generators: [],
  commands: [
    {
      name: 'devtools:git-info',
      path: './commands/',
    },
    {
      name: 'devtools:server',
      path: './commands/',
    },
  ],
  serverCommands: [getGitInformationServerCommand],
})
