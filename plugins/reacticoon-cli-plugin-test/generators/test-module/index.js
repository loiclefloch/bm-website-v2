const createGenerator = require('create-reacticoon-app/generator/utils/createGenerator')
const generateTestModule = require('./generateTestModule')

const testModuleGenerator = createGenerator({
  name: 'test-module',
  handler: generateTestModule,
})

module.exports = testModuleGenerator
