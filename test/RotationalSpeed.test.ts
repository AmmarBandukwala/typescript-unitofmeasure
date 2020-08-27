import { expect } from "chai";
import { RotationalSpeed } from "../src/units/RotationalSpeed";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("RotationalSpeed", function () {
    var measure = new RotationalSpeed(10);
    var isGood =
      measure.revolutionsPerMinute === 600 && 
      measure.revolutionsPerSecond === 10;
    expect(isGood).equal(true);
  });
});
