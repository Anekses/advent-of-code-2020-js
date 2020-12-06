const fs = require("fs");

const one = (input, right, down) => {
  const lines = input.split("\n");
  let result = 0;
  let elements = [];

  lines.forEach(line => {
    if (line) {
      let y = 0;
      while (y < line.length) {
        elements.push(line[y]);
        y++;
      }
    } else {
      const unique = [...new Set(elements)];
      result += unique.length;

      elements = [];
    }
  });

  const unique = [...new Set(elements)];
      result += unique.length;

  return result;
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(one(data));
  });
};

check();

module.exports = one;
