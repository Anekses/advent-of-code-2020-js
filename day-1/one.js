const fs = require("fs");

const one = (input) => {
  const numbers = input.split("\n").map((x) => parseInt(x));

  for (let i = 0; i < numbers.length; i++) {
    const firstNumber = numbers[i];
    for (let j = 1; j < numbers.length; j++) {
      const secondNumber = numbers[j];
      if (firstNumber + numbers[j] == 2020) {
        return firstNumber * secondNumber;
      }
    }
  }
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(one(data));
  });
};

check();

// module.exports = one;
