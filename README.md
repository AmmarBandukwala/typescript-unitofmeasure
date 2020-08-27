# Unit Of Measure Framework for TypeScript

## Credit

Based off UNITS.NET nuget package, modified for use in typescript/javascript work flows.

## Avaliable Units

- Angle
- Density
- Flow
- Force
- Length
- Pressure
- Rotational Speed
- Speed
- Tempearture
- Volume

## Extension Class

### Unit Enumerations

Class contains numerical enumerations of each classes avaliable unit of measure conversion options.

### Unit String Formatter

Class contains helper methods to get the proper string representation of each individual unit.

## Code Example

```typescript
var angle = new Angle(10); // base unit of angle is degrees
var radians = angle.radians // convert the 10 degress to radians
var angle2 = Angle.From(10, AngleUnit.Radian); // static helper method to generate a unit object from a specific unit
var displayString = angle2.toString(); // prints numerical value, rounded, with unit suffix based on UnitOfMeasure.Mode static global property.
```
