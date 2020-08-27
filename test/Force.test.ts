import { expect } from "chai";
import { Force } from "../src/units/Force";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Force", function () {
    var measure = new Force(10);
    var isGood =
      measure.dyne === 1000000 &&
      measure.kiloPonds === 1.0197162099998804 &&
      measure.kilogramsForce === 1.0197162099998804 &&
      measure.kilonewtons === 0.01 &&
      measure.newtons === 10 &&
      measure.poundals === 72.3301 &&
      measure.poundsForce === 2.2480894309971 &&
      measure.tonnesForce === 0.0010197162099998805;
    expect(isGood).equal(true);
  });
});
