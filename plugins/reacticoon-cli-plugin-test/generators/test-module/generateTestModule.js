const createTemplateFiles = require('create-reacticoon-app/generator/utils/createTemplateFiles')

function error(msg) {
  console.error(msg)
  process.exit()
}

const templateFiles = ['index.ejs']

const generateSimpleModule = (args, data) => {
  const destPath = `${data.cwd}/src/modules/test-module`

  const templateData = {
    text: 'It works!',
  }

  createTemplateFiles(templateFiles, __dirname + '/_templates', destPath, templateData)
}

module.exports = generateSimpleModule
