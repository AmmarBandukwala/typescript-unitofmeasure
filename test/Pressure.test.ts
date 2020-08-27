import { expect } from "chai";
import { Pressure } from "../src/units/Pressure";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Pressure", function () {
    var measure = new Pressure(10);
    var isGood =
      measure.atmospheres === 0.00009869232667160128 &&
      measure.bars === 0.0001 &&
      measure.centibars === 0.01 &&
      measure.decapascals === 1 &&
      measure.decibars === 0.001 &&
      measure.gigapascals === 1e-8 &&
      measure.hectopascals === 0.1 &&
      measure.inchOfWater === 0.04018648134804748 &&
      measure.kilobars === 1.0000000000000001e-7 &&
      measure.kilogramsForcePerSquareCentimeter === 0.00010197162129779283 &&
      measure.kilogramsForcePerSquareMeter === 1.01971619222242 &&
      measure.kilogramsForcePerSquareMillimeter === 0.00000101971619222242;
    expect(isGood).equal(true);
  });
});
