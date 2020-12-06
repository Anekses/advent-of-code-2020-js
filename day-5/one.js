const fs = require("fs");

const one = (input, right, down) => {
  const lines = input.split("\n");
  let result = 0;

  lines.forEach(line => {
    let y = 0;
    let maxY = line.length;

    // let row = 0;
    let minRow = 0;
    let maxRow = 127;

    // let col = 0;
    let minCol = 0;
    let maxCol = 7;

    while(y < maxY) {
      const char = line.charAt(y);
      
      if (char === 'F') {
        const length = maxRow - minRow + 1;
        maxRow -= length/2;
      } else if (char === 'B') {
        const length = maxRow - minRow + 1;
        minRow += length/2;
      } else if (char === 'L') {
        const length = maxCol - minCol + 1;
        maxCol -= length/2;
      } else if (char === 'R') {
        const length = maxCol - minCol + 1;
        minCol += length/2;
      }

      y++;
    }

    const id = minRow * 8 + minCol;
    if (id > result) {
      result = id;
    }
  });

  return result;
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(one(data));
  });
};

check();

module.exports = one;
