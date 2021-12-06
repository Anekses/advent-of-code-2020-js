const assert = require("assert");
const one = require("./one");
const two = require("./two");

describe("Part One", () => {
  it("should return 514579 with input", () => {
    let input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
    assert.strictEqual(one(input), 198);
  });
});

describe("Part Two", () => {
  it("should return 241861950 with input", () => {
    let input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
    assert.strictEqual(two(input, true) * two(input, false), 230);
  });
});
