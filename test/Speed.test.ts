import { expect } from "chai";
import { Speed } from "../src/units/Speed";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Speed", function () {
    var measure = new Speed(100);
    var isGood =
      measure.centimetersPerSecond === 10000 &&
      measure.decimetersPerSecond === 1000 &&
      measure.feetPerHour === 1181102.362 &&
      measure.feetPerMinute === 19685 &&
      measure.feetPerSecond === 328.0839895013123 &&
      measure.kilometersPerHour === 360 &&
      measure.kilometersPerSecond === 0.1 &&
      measure.knots === 194.38461717893492 &&
      measure.metersPerMinute === 6000 &&
      measure.metersPerSecond === 100 &&
      measure.micrometersPerSecond === 100000000 &&
      measure.milesPerHour === 223.69362920544023 &&
      measure.millimetersPerSecond === 100000 &&
      measure.nanometersPerSecond === 100000000000;
    expect(isGood).equal(true);
  });
});
