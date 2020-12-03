const fs = require("fs");

const one = (input, right, down) => {
  const lines = input.split("\n");
  const maxY = lines.length;
  const maxX = lines[0].length;
  let result = 0;
  let x = 0;
  let y = 0;

  while(y < maxY - 1) {
    // const currentArea = 
    x += right;
    x = x % maxX;
    y += down;

    if (lines[y].charAt(x) == '#') result++;
  }

  return result;
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    let result = [];

    result += one(data, 1, 1);
    result *= one(data, 3, 1);
    result *= one(data, 5, 1);
    result *= one(data, 7, 1);
    result *= one(data, 1, 2);

    console.log(result);
  });
};

check();

module.exports = one;
