const createReacticoonPlugin = require('create-reacticoon-app/plugin/createReacticoonPlugin')
const createServerCommand = require('create-reacticoon-app/server/createServerCommand')

const listMockApiFilesServerCommand = createServerCommand(
  'MOCKAPI::LIST_FILES',
  'List mock api files',
  './server-commands/list-files',
  {}
)

module.exports = createReacticoonPlugin({
  checkup: [require.resolve('./checks/checkMockupDirectoryExists')],
  generators: [],
  commands: [
    {
      name: 'mockapi:list-files',
      path: './commands/',
    },
  ],
  serverCommands: [listMockApiFilesServerCommand],
})
