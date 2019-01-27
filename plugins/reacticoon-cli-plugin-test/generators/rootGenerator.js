"use strict";

const createRootGenerator = require("create-reacticoon-app/generator/utils/createRootGenerator")

module.exports = createRootGenerator({
  templates: [
    require("./test-module"),
  ],
})