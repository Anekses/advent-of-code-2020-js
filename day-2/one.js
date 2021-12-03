const fs = require("fs");

const one = (input) => {
  const lines = input.split("\n");

  let horizontal = 0;
  let depth = 0;

  lines.forEach((element) => {
    const splited = element.split(" ");
    const direction = splited[0];
    const value = parseInt(splited[1]);

    switch (direction) {
      case "forward":
        horizontal += value;
        break;
      case "down":
        depth += value;
        break;
      case "up":
        depth -= value;
        break;
      default:
        break;
    }
  });

  return horizontal * depth;
};

module.exports = one;
