const fs = require("fs");

const one = (input) => {
  const numbers = input.split("\n").map((x) => parseInt(x));
  let counter = 0;
  let prevNumber;

  for (let i = 1; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    prevNumber = numbers[i - 1];

    if (currentNumber > prevNumber) counter++;
  }

  return counter;
};

// const check = () => {
//   fs.readFile("./input.txt", "utf-8", (err, data) => {
//     console.log(one(data));
//   });
// };

// check();

module.exports = one;
