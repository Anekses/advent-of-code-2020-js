const fs = require("fs");

const two = (input) => {
  const lines = input.split("\n");

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  lines.forEach((element) => {
    const splited = element.split(" ");
    const direction = splited[0];
    const value = parseInt(splited[1]);

    switch (direction) {
      case "forward":
        horizontal += value;
        depth += aim * value;
        break;
      case "down":
        aim += value;
        break;
      case "up":
        aim -= value;
        break;
      default:
        break;
    }
  });

  return horizontal * depth;
};

module.exports = two;
