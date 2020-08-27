import { expect } from "chai";
import { Temperature } from "../src/units/Temperature";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Temperature", function () {
    var measure = new Temperature(98.6);
    var isGood =
      measure.degreesCelsius === -174.54999999999998 &&
      measure.degreesDelisle === 411.82499999999993 &&
      measure.degreesFahrenheit === -282.18999999999994 &&
      measure.degreesNewton === -57.601499999999994 &&
      measure.degreesRankine === 177.48 &&
      measure.degreesReaumur === -139.64 &&
      measure.degreesRoemer === -84.13874999999999 && 
      measure.kelvins === 98.6;
    expect(isGood).equal(true);
  });
});
