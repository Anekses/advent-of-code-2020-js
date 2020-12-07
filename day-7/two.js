const fs = require("fs");

const two = (input, bagName) => {
  const lines = input.split("\n");
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

      containBags[i] = {
        name: bag,
        count: parseInt(splittedBag[0])
      };
    }

    if (!isEmptyRow) {
      elements.push({
        primaryBag: {
          name: primaryBag,
          count: 1,
        },
        containBags,
      })
    } else {
      elements.push({
        primaryBag: {
          name: primaryBag,
          count: 1,
        }
      })
    }    
  });

  const bagsToHold = elements.filter(element => element.primaryBag.name === bagName);
  let result = 0;

  while(bagsToHold.length) {
    const uberBag = bagsToHold.splice(0, 1)[0];
    
    if (uberBag.containBags) {
      elements.forEach(element => {
          uberBag.containBags.forEach(containBag => {
            if (containBag.name === element.primaryBag.name) {
              const tmpElement = Object.assign({}, element);
              tmpElement.primaryBag.count = uberBag.primaryBag.count * containBag.count;
              bagsToHold.push(tmpElement);
              result += tmpElement.primaryBag.count
            }
          })
      })
    }
  }
  return result;
};

const check = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(two(data, 'shiny gold bags'));
  });
};

check();

module.exports = two;


//not working - result 1.5x too large