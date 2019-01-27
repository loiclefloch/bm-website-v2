const createCheck = require("create-reacticoon-app/checkup/utils/createCheck");

const run = ({ check, warn }) => {
  check(
    1 == 1,
    `1 equal 1`,
    `1 does not equal 1`
  );

  warn(
    1 === '1',
    `1 equal '1'`,
    `1 does not equal '1'`
  );
};

module.exports = createCheck({
  name: "test checkup",
  description: "Check for Tests",
  run
});
