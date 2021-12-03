const assert = require("assert");
const one = require("./one");
const two = require("./two");

describe("Part One", () => {
  it("should return 514579 with input", () => {
    let input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    assert.strictEqual(one(input), 150);
  });
});

describe("Part Two", () => {
  it("should return 241861950 with input", () => {
    let input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    assert.strictEqual(two(input), 900);
  });
});
