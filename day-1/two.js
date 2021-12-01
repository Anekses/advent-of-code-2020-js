const fs = require("fs");

const two = (input) => {
  const numbers = input.split("\n").map((x) => parseInt(x));
  let counter = 0;
  let prevNumber;

  for (let i = 1; i < numbers.length - 2; i++) {
    let currentNumber = numbers[i];
    prevNumber = numbers[i - 1];

    const sumPrev = prevNumber + currentNumber + numbers[i + 1];
    const sumNext = currentNumber + numbers[i + 1] + numbers[i + 2];

    if (sumNext > sumPrev) counter++;
  }

  return counter;
};

// const check = () => {
//   fs.readFile("./input.txt", "utf-8", (err, data) => {
//     console.log(two(data));
//   });
// };

// check();

module.exports = two;
