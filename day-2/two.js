const fs = require("fs");

const two = (input) => {
  const lines = input.split("\n");
  let result = 0;

  lines.forEach(line => {
    const splitted = line.split(': ');
    const numbersAndLetter = splitted[0];
    const numbersAndLettersplitted = numbersAndLetter.split(' ');
    const numbers = numbersAndLettersplitted[0];
    const numbersSplitted = numbers.split('-');
    const firstNumber = parseInt(numbersSplitted[0] - 1);
    const secondNumber = parseInt(numbersSplitted[1] - 1);
    const letter = numbersAndLettersplitted[1];
    const password = splitted[1];

    
    const firstValid = password[firstNumber] === letter;
    const secondValid = password[secondNumber] === letter;
    console.log({password, firstNumber: password[firstNumber + 1], secondNumber: password[secondNumber + 1], letter, firstValid, secondValid})
    
    if ((firstValid && !secondValid) || (!firstValid && secondValid)) {
      result++;
    }
  });

  return result;
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(two(data));
  });
};

check();

module.exports = two;
