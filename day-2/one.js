const fs = require("fs");

const one = (input) => {
  const lines = input.split("\n");
  let result = 0;

  lines.forEach(line => {
    const splitted = line.split(': ');
    const numbersAndLetter = splitted[0];
    const numbersAndLettersplitted = numbersAndLetter.split(' ');
    const numbers = numbersAndLettersplitted[0];
    const numbersSplitted = numbers.split('-');
    const minNumber = numbersSplitted[0];
    const maxNumber = numbersSplitted[1];
    const letter = numbersAndLettersplitted[1];
    const password = splitted[1];
    
    let occurencies = 0;
    for(let i = 0; i < password.length; i++) {
      if (password[i] === letter) occurencies++;
    }

    if (occurencies <= maxNumber && occurencies >= minNumber) result++;
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
