const createCheck = require("create-reacticoon-app/checkup/utils/createCheck");
const check = require("create-reacticoon-app/checkup/utils/check");

const run = () => {
  check(
    1 == 1,
    `1 equal 1`,
    `1 does not equal 1`
  );

};

module.exports = createCheck({
  name: "test checkup",
  description: "Check for Tests",
  run
});
