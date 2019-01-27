const createReacticoonPlugin = require('create-reacticoon-app/plugin/createReacticoonPlugin')

const testPlugin = createReacticoonPlugin({
  checkup: ['./checkup/testCheckup'],
  commands: [
    {
      name: 'test-cmd',
      path: './commands/test',
    },
  ],
  generators: [
    "./generators/rootGenerator.js"
  ],
  overrides: "./overrides",
})

module.exports = testPlugin
