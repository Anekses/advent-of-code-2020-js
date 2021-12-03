const fs = require("fs");
const one = require("./one");
const two = require("./two");

const checkOne = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(one(data));
  });
};

const checkTwo = () => {
  fs.readFile("./input.txt", "utf-8", (err, data) => {
    console.log(two(data));
  });
};

checkOne();
checkTwo();
