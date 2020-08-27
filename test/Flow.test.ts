import { expect } from "chai";
import { Flow } from "../src/units/Flow";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Flow", function () {
    var measure = new Flow(10);
    var isGood =
      measure.barrelPerDay === 5434400 &&
      measure.barrelPerHour === 226433 &&
      measure.barrelPerMinute === 3773.8900000000003 &&
      measure.cubicFeetPerMinute === 21188.800030000002 &&
      measure.cubicFeetPerSecond === 353.14666213000004 &&
      measure.cubicMetersPerHour === 36000 &&
      measure.cubicMetersPerMinute === 600 &&
      measure.cubicMetersPerSecond === 10 &&
      measure.gallonPerMinute === 158520 &&
      measure.millionCubicFeetPerDay === 30.6 &&
      measure.millionUsGallonsPerDay === 228.24465227000002;
    expect(isGood).equal(true);
  });
});
