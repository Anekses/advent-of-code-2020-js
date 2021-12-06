const fs = require("fs");

const two = (input, isMost) => {
  const lines = input.split("\n").map((x) => x);
  const bitStringLength = lines[0].length;

  let lastLine = "";
  let stringToStartWith = "";

  for (let i = 0; i < bitStringLength + 1; i++) {
    let oneApp = 0;
    let zeroApp = 0;

    lines.forEach((element) => {
      if (element.startsWith(stringToStartWith)) {
        const el = element[i];
        lastLine = element;

        if (el === "1") oneApp++;
        else if (el === "0") zeroApp++;
      }
    });

    if (oneApp + zeroApp <= 1) {
      return parseInt(lastLine, 2);
    }

    if (oneApp >= zeroApp) {
      stringToStartWith += isMost ? "1" : "0";
    } else {
      stringToStartWith += isMost ? "0" : "1";
    }
  }
};

module.exports = two;
