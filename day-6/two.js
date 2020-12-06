const fs = require("fs");

const two = (input, right, down) => {
  const lines = input.split("\n");
  let result = 0;
  let elements = {};
  let count = 0;

  lines.forEach(line => {
    if (line) {
      let y = 0;
      while (y < line.length) {
        const currentElement = elements[line[y]]
        if (currentElement) {
          currentElement.count++;
        } else {
          elements[line[y]] = {
            count: 1
          }
        }
        y++;
      }
      count++;
    } else {
      for (const element in elements) {
        if (elements.hasOwnProperty(element)) {
          const innerElement = elements[element];
          if (innerElement.count === count) { result++ }
        }
      }

      elements = {};
      count = 0;
    }
  });

  for (const element in elements) {
    if (elements.hasOwnProperty(element)) {
      const innerElement = elements[element];
      if (innerElement.count === count) { result++ }
    }
  }

  return result;
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(two(data));
  });
};

check();

module.exports = two;
