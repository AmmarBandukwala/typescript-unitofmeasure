import { expect } from "chai";
import { Angle } from "../src/units/Angle";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Angle", function () {
    var measure = new Angle(90);
    var isGood =
      measure.degrees === 90 &&
      measure.gradians === 100 &&
      measure.radians === 1.5707963267948966;
    expect(isGood).equal(true);
  });
});
