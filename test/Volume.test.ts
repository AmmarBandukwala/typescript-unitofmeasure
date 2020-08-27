import { expect } from "chai";
import { Volume } from "../src/units/Volume";

describe("#", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("Volume", function () {
    var measure = new Volume(100);
    var isGood =
      measure.ceciliters === 1000000 &&
      measure.cectoliters === 1000 &&
      measure.centiliters === 10000000 &&
      measure.citers === 100000 &&
      measure.cmperialGallons === 21996.9248299 &&
      measure.cmperialOunces === 3519507.97279 &&
      measure.cubicCentimeters === 100000000 &&
      measure.cubicDecimeters === 100000 &&
      measure.cubicFeet === 3531.4724827664145 &&
      measure.cubicInches === 6102398.2425093055 &&
      measure.cubicKilometers === 1e-7 &&
      measure.cubicMeters === 100 &&
      measure.cubicMiles === 2.39912758316496e-8 &&
      measure.cubicMillimeters === 100000000000 &&
      measure.cubicYards === 130.79506192870204 &&
      measure.milliliters === 100000000 &&
      measure.oilBarrels === 628.98105697751 &&
      measure.tablespoons === 6762804.531793188 &&
      measure.teaspoons === 20288413.636541538 &&
      measure.usGallons === 26417.217685798896 &&
      measure.usOunces === 3381402.27018;
    expect(isGood).equal(true);
  });
});
