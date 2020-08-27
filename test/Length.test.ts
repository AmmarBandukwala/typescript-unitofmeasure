import { expect } from "chai";
import { Length } from "../src/units/Length";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Length", function () {
    var measure = new Length(10);
    var isGood =
      measure.centimeters === 1000 &&
      measure.decimeters === 100 &&
      measure.feet === 32.808398950131235 &&
      measure.inches === 393.7007874015748 &&
      measure.kilometers === 0.01 &&
      measure.meters === 10 &&
      measure.microinches === 393700787.4015748 &&
      measure.micrometers === 10000000 &&
      measure.miles === 0.006213727366498068 &&
      measure.millimeters === 10000 &&
      measure.mils === 393700.7874015748 &&
      measure.nanometers === 10000000000;
    expect(isGood).equal(true);
  });
});