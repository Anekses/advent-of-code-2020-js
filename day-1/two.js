const fs = require("fs");

const two = (input) => {
  const numbers = input.split("\n").map((x) => parseInt(x));

  for (let i = 0; i < numbers.length; i++) {
    const firstNumber = numbers[i];
    for (let j = 1; j < numbers.length; j++) {
      const secondNumber = numbers[j];
      for (let k = 2; k < numbers.length; k++) {
        const thirdNumber = numbers[k];
        if (firstNumber + secondNumber + thirdNumber == 2020) {
          return firstNumber * secondNumber * thirdNumber;
        }
      }
    }
  }
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(two(data));
  });
};

check();

// module.exports = two;
