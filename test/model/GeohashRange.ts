import { GeohashRange } from "../../src/model/GeohashRange";
import { expect } from "chai";

describe("GeohashRange.trySplit", function () {
  const range = new GeohashRange(1000000000000000000n, 1000000000010000000n);

  it("returns the same range when nothing needs splitting", function () {
    expect(range.trySplit(1)).to.deep.equal([range]);
    expect(range.trySplit(3)).to.deep.equal([range]);
    expect(range.trySplit(4)).to.deep.equal([range]);
    expect(range.trySplit(5)).to.deep.equal([range]);
    expect(range.trySplit(6)).to.deep.equal([range]);
    expect(range.trySplit(7)).to.deep.equal([range]);
    expect(range.trySplit(8)).to.deep.equal([range]);
    expect(range.trySplit(9)).to.deep.equal([range]);
    expect(range.trySplit(10)).to.deep.equal([range]);
    expect(range.trySplit(11)).to.deep.equal([range]);
  });

  it("splits correctly on the given digit", function () {
    expect(range.trySplit(12)).to.deep.equal([
      new GeohashRange(1000000000000000000n, 1000000000009999999n),
      new GeohashRange(1000000000010000000n, 1000000000010000000n),
    ]);

    expect(range.trySplit(13)).to.deep.equal([
      new GeohashRange(1000000000000000000n, 1000000000000999999n),
      new GeohashRange(1000000000001000000n, 1000000000001999999n),
      new GeohashRange(1000000000002000000n, 1000000000002999999n),
      new GeohashRange(1000000000003000000n, 1000000000003999999n),
      new GeohashRange(1000000000004000000n, 1000000000004999999n),
      new GeohashRange(1000000000005000000n, 1000000000005999999n),
      new GeohashRange(1000000000006000000n, 1000000000006999999n),
      new GeohashRange(1000000000007000000n, 1000000000007999999n),
      new GeohashRange(1000000000008000000n, 1000000000008999999n),
      new GeohashRange(1000000000009000000n, 1000000000009999999n),
      new GeohashRange(1000000000010000000n, 1000000000010000000n),
    ]);
  });
});
