const fs = require("fs");

const one = (input) => {
  const lines = input.split("\n").map((x) => x);
  const bitStringLength = lines[0].length;

  const resultGamma = [];
  const resultEpsilon = [];

  for (let i = 0; i < bitStringLength; i++) {
    let oneApp = 0;
    let zeroApp = 0;

    lines.forEach((element) => {
      const el = element[i];

      if (el === "1") oneApp++;
      else if (el === "0") zeroApp++;
    });

    if (oneApp > zeroApp) {
      resultGamma.push(1);
      resultEpsilon.push(0);
    } else {
      resultGamma.push(0);
      resultEpsilon.push(1);
    }
  }

  const binaryGamma = parseInt(resultGamma.join(""), 2);
  const binaryEpsilon = parseInt(resultEpsilon.join(""), 2);

  return binaryGamma * binaryEpsilon;
};

module.exports = one;
