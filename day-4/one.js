const fs = require("fs");

const one = (input, right, down) => {
  const lines = input.split("\n");
  let result = 0;
  let document = {};

  lines.forEach(line => {
    if (line) {
      const data = line.split(' ');
      data.forEach(single => {
        const key = single.split(':');
        document[key[0]] = key[1];
      })
    } else {
      if (checkValidDocument(document)) {
        result++;
      }
      document = {};
    }
  });
  
  if (checkValidDocument(document)) {
    result++;
  }

  return result;
};

const checkValidDocument = (document) => {
  if (!document.hgt) {
    return false;
  }

  const heightSplittedIn = parseInt(document.hgt.split('in')[0]);
  const heightSplittedCm = parseInt(document.hgt.split('cm')[0]);

  const validEcl = document.ecl && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(document.ecl) > -1;
  const validPid = document.pid && document.pid.length === 9 && /^\d+$/.test(document.pid);
  const validEyr = document.eyr && document.eyr.length === 4 && /^\d+$/.test(document.eyr) && document.eyr >= 2020 && document.eyr <= 2030;
  const validHcl = document.hcl && /#[0-9a-f]{6}$/.test(document.hcl);
  const validByr = document.byr && document.byr.length === 4 && /^\d+$/.test(document.byr) && document.byr >= 1920 && document.byr <= 2002;
  const validIyr = document.iyr && document.iyr.length === 4 && /^\d+$/.test(document.iyr) && document.iyr >= 2010 && document.iyr <= 2020;
  const validHgt = document.hgt && (
    (document.hgt.indexOf('in') > -1 && heightSplittedIn >= 59 && heightSplittedIn <= 76) ||
    (document.hgt.indexOf('cm') > -1 && heightSplittedCm >= 150 && heightSplittedCm <= 193)
  );

  return validEcl && validPid && validEyr && validHcl && validByr && validIyr && validHgt;
}

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(one(data));
  });
};

check();

module.exports = one;
