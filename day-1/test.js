const assert = require("assert");
const one = require("./one");
const two = require("./two");

describe("Part One", () => {
  it("should return 514579 with input", () => {
    let input = `199
    200
    208
    210
    200
    207
    240
    269
    260
    263`;
    assert.strictEqual(one(input), 7);
  });
});

describe("Part Two", () => {
  it("should return 241861950 with input", () => {
    let input = `199
    200
    208
    210
    200
    207
    240
    269
    260
    263`;
    assert.strictEqual(two(input), 5);
  });
});
