const fs = require("fs");

const one = (input, bagName) => {
  const lines = input.split("\n");
  let result = 0;
  let elements = [];

  lines.forEach(line => {
    const splitZero = line.split('.');
    const splitOne = splitZero[0].split(' contain ');
    const splitTwo = splitOne[1].split(', ');

    const primaryBag = splitOne[0];
    const containBags = splitTwo;
    let isEmptyRow = false;

    for (let i = 0; i < containBags.length; i++) {
      const currentBag = containBags[i];
      const splittedBag = currentBag.split(/ (.+)?/, 2);
      let bag = splittedBag[1];
      
      if (parseInt(splittedBag[0]) === 1) {
        bag += 's';
      }

      if (bag === 'other bags') {
        isEmptyRow = true;
      }

      containBags[i] = bag;
    }

    if (!isEmptyRow) {
      elements.push({
        primaryBag,
        containBags,
      });
    }    
  });

  const bagsToHold = [bagName];
  let bagsToHoldLength = bagsToHold.length;
  let lastLengthValue = 0;

  while(bagsToHoldLength > lastLengthValue) {
    lastLengthValue = bagsToHoldLength;
    elements.forEach(element => {
      element.containBags.forEach(bag => {
        bagsToHold.forEach(refBag => {
          if (bag === refBag && !bagsToHold.includes(element.primaryBag)) {
            bagsToHold.push(element.primaryBag);
            bagsToHoldLength++;
          }
        })
      })
    });
  }

  return bagsToHoldLength - 1; //for shiny gold bag
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(one(data, 'shiny gold bags'));
  });
};

check();

module.exports = one;
