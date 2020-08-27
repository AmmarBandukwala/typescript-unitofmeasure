import { expect } from "chai";
import { Density } from "../src/units/Density";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Density", function () {
    var measure = new Density(10);
    var isGood = 
        measure.kilogramsPerCubicCentimeter === 1e-7 &&
        measure.kilogramsPerCubicMeter === 10 &&
        measure.kilogramsPerCubicMillimeter === 1e-11 &&
        measure.kilopoundsPerCubicFoot === 0.00062427961 &&
        measure.kilopoundsPerCubicInch === 3.6127292000099506e-7 &&
        measure.poundPerGallon === 0.083454045 &&
        measure.poundsPerCubicFoot === 0.62427961 && 
        measure.poundsPerCubicInch === 0.0003612729200009951 &&
        measure.tonnesPerCubicCentimeter === 9.999999999999999e-11 &&
        measure.tonnesPerCubicMeter === 0.01 &&
        measure.tonnesPerCubicMillimeter === 1.0000000000000002e-14;        
    expect(isGood).equal(true);
  });
});